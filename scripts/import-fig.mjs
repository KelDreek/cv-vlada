import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { unzipSync } from 'fflate';
import { parseFig, nodeId, getBlobBytes, transformSvgPathData } from 'openfig-core';

const input = process.argv[2] || 'design/portfolio.fig';
const sourceBytes=new Uint8Array(fs.readFileSync(input));
const doc = parseFig(sourceBytes);
const archive=unzipSync(sourceBytes);
fs.mkdirSync('design/original-assets', { recursive: true });
fs.mkdirSync('public/lettering', { recursive: true });
fs.mkdirSync('work/figma-original', { recursive: true });
fs.mkdirSync('outputs/verification',{recursive:true});
fs.mkdirSync('public/media',{recursive:true});
for(const name of ['flag-gb','flag-pl'])if(fs.existsSync(`public/lettering/${name}.png`))fs.copyFileSync(`public/lettering/${name}.png`,`design/original-assets/${name}.png`);
for(const [name,bytes]of Object.entries(archive))if(/^audios\/[a-f0-9]+$/.test(name))fs.writeFileSync(`design/original-assets/audio-${name.split('/').pop()}.mp3`,bytes);
const images = new Map();
for (const [name, bytes] of doc.images) {
  const hash = name.split('/').pop();
  const info = await sharp(bytes).metadata();
  const ext = info.format === 'jpeg' ? 'jpg' : info.format;
  const filename = `${hash}.${ext}`;
  fs.writeFileSync(`design/original-assets/${filename}`, bytes);
  images.set(hash, { filename, width: info.width, height: info.height, format: info.format });
}
const idOf = guid => guid ? `${guid.sessionID}:${guid.localID}` : null;
const hashOf = bytes => bytes ? Buffer.from(Object.values(bytes)).toString('hex') : null;
const copy = value => structuredClone(value);
function merge(a, b) {
  const out = { ...a };
  for (const [k,v] of Object.entries(b || {})) {
    if (k === 'guidPath') continue;
    out[k] = v && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Uint8Array) && out[k] && typeof out[k] === 'object' ? merge(out[k], v) : v;
  }
  return out;
}
const entries = list => (list || []).map(o => ({ path: (o.guidPath?.guids || []).map(idOf), props: o }));
const propertyDefinitions=new Map();
for(const n of doc.nodes)for(const definition of n.componentPropDefs||[])propertyDefinitions.set(idOf(definition.id),definition);
function propertyDefinition(id){const seen=new Set();let d=propertyDefinitions.get(idOf(id));while(d&&!d.name&&!seen.has(idOf(d.id))){seen.add(idOf(d.id));d=propertyDefinitions.get(idOf(d.parentPropDefId));}return d;}
let resolvedCount = 0;
function resolve(raw, context = [], trail = '', inheritedAssignments = {}) {
  let n = copy(raw);
  const assignments={...inheritedAssignments};
  for (const o of context.filter(o => o.path.length === 0)) n = merge(n, o.props);
  for(const assignment of n.componentPropAssignments||[]){const definition=propertyDefinition(assignment.defID);const text=assignment.value?.textValue||assignment.varValue?.value?.textDataValue;if(definition?.name&&text)assignments[definition.name]={text,initial:definition.initialValue?.textValue?.characters};}
  let source = raw;
  let childContext = context.filter(o => o.path.length > 0);
  if (n.type === 'INSTANCE' && n.symbolData?.symbolID) {
    const base = doc.nodeMap.get(idOf(n.symbolData.symbolID));
    if (!base) throw new Error(`Missing component ${idOf(n.symbolData.symbolID)}`);
    source = base;
    const instance = n;
    n = merge(copy(base), instance);
    n.type = 'FRAME';
    childContext = [...entries(instance.derivedSymbolData), ...entries(instance.symbolData?.symbolOverrides), ...childContext];
    const rootAliases = [nodeId(base), idOf(base.overrideKey), idOf(base.publishID)].filter(Boolean);
    childContext = childContext.map(o => rootAliases.includes(o.path[0]) ? {...o,path:o.path.slice(1)} : o);
    for(const o of childContext.filter(o=>o.path.length===0))n=merge(n,o.props);
    childContext=childContext.filter(o=>o.path.length>0);
  }
  const ownId = nodeId(raw);
  n.sourceId = ownId;
  n.sourcePath = trail ? `${trail}/${ownId}` : ownId;
  n.children = (doc.childrenMap.get(nodeId(source)) || []).map(child => {
    const aliases=[nodeId(child),idOf(child.overrideKey),idOf(child.publishID)].filter(Boolean);
    return resolve(child, childContext.map(o => aliases.includes(o.path[0]) ? {...o,path:o.path.slice(1)} : o), n.sourcePath, assignments);
  });
  if(n.type==='TEXT')for(const [name,assignment]of Object.entries(assignments))if(n.name===name||n.textData?.characters===assignment.initial)n.textData=copy(assignment.text);
  resolvedCount++;
  return n;
}
function hex(c, opacity=1) {
  if (!c) return '#332e1c';
  const alpha = (c.a ?? 1) * opacity;
  return '#'+[c.r,c.g,c.b].map(x=>Math.round(x*255).toString(16).padStart(2,'0')).join('')+(alpha < 0.999 ? Math.round(alpha*255).toString(16).padStart(2,'0') : '');
}
const tokens = {'#fafaf9':'$background-primary','#f1f1ef':'$background-secondary','#332e1c':'$text-primary','#838074':'$text-secondary'};
const token = c => tokens[c] || c;
function decodePath(blobIndex) {
  const b = getBlobBytes(doc, blobIndex);
  if (!b) return '';
  const view = new DataView(b.buffer,b.byteOffset,b.byteLength);
  let i=0, started=false;const parts=[];
  while(i<b.length) {
    const op=b[i++];
    if(op===0){if(started)parts.push('Z');continue;}
    const length=({1:2,2:2,3:4,4:6})[op];
    if(!length||i+length*4>b.length)throw new Error(`Unsupported geometry opcode ${op} in blob ${blobIndex}`);
    const values=[];for(let j=0;j<length;j++){values.push(+view.getFloat32(i,true).toFixed(7));i+=4;}
    parts.push(({1:'M',2:'L',3:'Q',4:'C'})[op]+values.join(' '));started=true;
  }
  return parts.join('');
}
function lettering(n, tight=false) {
  const baseline=n.derivedTextData?.baselines?.[0];
  if(!baseline)return null;
  const shift=tight?baseline.position.x:0;
  const width=tight?baseline.width:n.size.x;
  const geometry=(n.derivedTextData.glyphs||[]).map(g=>transformSvgPathData(decodePath(g.commandsBlob),{scaleX:g.fontSize,scaleY:-g.fontSize,translateX:g.position.x-shift,translateY:g.position.y})).join('');
  const color=hex(n.fillPaints?.find(p=>p.visible!==false)?.color);
  return {geometry,width,height:n.size.y,color};
}
for (const [id,name] of [['1:727','english'],['1:732','polski'],['1:51','in-progress']]) {
  const n=doc.nodeMap.get(id), p=lettering(n,true);
  fs.writeFileSync(`public/lettering/${name}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" width="${p.width}" height="${p.height}" viewBox="0 0 ${p.width} ${p.height}"><path d="${p.geometry}" fill="${p.color}"/></svg>`);
}
const videoByHash = new Map();
const sourceMedia = JSON.parse(fs.readFileSync('design/media-sources.json','utf8'));
for(const source of sourceMedia){const bytes=archive[`videos/${source.videoHash}`];if(!bytes)throw new Error(`Video missing from original archive: ${source.slot}`);fs.writeFileSync(`public/media/${source.slot}.mp4`,bytes);}
for(const [hash,name]of [['482ab6657515261d05d852ad3f8b35f8a7b0ec2a','consumer-reflection'],['bef93d62e63dfc1bd9f590a4e21bdb8de7dc0bd0','zuzu-reflection']]){const original=images.get(hash);fs.copyFileSync(`design/original-assets/${original.filename}`,`public/media/${name}.gif`);}
const issues=[];
function paints(n) {
  return (n.fillPaints||[]).filter(p=>p.visible!==false).map(p=>{
    if(p.type==='SOLID')return token(hex(p.color,p.opacity??1));
    if(p.type==='IMAGE'||p.type==='VIDEO') {
      const hash=hashOf(p.image?.hash||p.imageThumbnail?.hash), image=images.get(hash);
      if(!image){issues.push({node:n.sourcePath,reason:'Image not embedded',hash});return null;}
      if(p.type==='VIDEO') {
        const videoHash=hashOf(p.video?.hash);
        videoByHash.set(videoHash,{image,playback:n.videoPlayback,node:n.sourcePath});
      }
      return {type:'image',url:`./original-assets/${image.filename}`,mode:p.imageScaleMode==='FIT'?'contain':'cover',...(p.opacity<1?{opacity:p.opacity}:{}),...(p.imageScaleMode==='CROP'&&p.transform?{transform:[p.transform.m00,p.transform.m10,p.transform.m01,p.transform.m11,p.transform.m02,p.transform.m12]}:{})};
    }
    issues.push({node:n.sourcePath,reason:'Unsupported paint',type:p.type});return null;
  }).filter(Boolean);
}
function penNode(n) {
  if(!n.size)return null;
  const t=n.transform||{};
  const out={name:n.name||n.type,type:'frame',x:t.m02||0,y:t.m12||0,width:n.size.x,height:n.size.y,metadata:{type:'figma-import',nodeId:n.sourceId,sourcePath:n.sourcePath}};
  const rawSource=doc.nodeMap.get(n.sourceId);if(rawSource?.type==='INSTANCE')out.metadata.componentSourceId=idOf(rawSource.symbolData.symbolID);
  if(n.visible===false)out.enabled=false;
  if(n.opacity!==undefined&&n.opacity!==1)out.opacity=n.opacity;
  const rotation=-Math.atan2(t.m10||0,t.m00??1)*180/Math.PI;if(Math.abs(rotation)>.001)out.rotation=rotation;
  const fill=paints(n);if(fill.length)out.fill=fill;
  const videoPaint=(n.fillPaints||[]).find(p=>p.type==='VIDEO');
  if(videoPaint){out.metadata.videoHash=hashOf(videoPaint.video?.hash);const media=sourceMedia.find(s=>s.videoHash===out.metadata.videoHash);if(media)out.metadata.videoFile=`../public/media/${media.slot}.mp4`;}
  const strokes=(n.strokePaints||[]).filter(p=>p.visible!==false&&p.type==='SOLID');
  if(strokes.length){out.stroke=hex(strokes[0].color,strokes[0].opacity??1);out.strokeWidth=n.strokeWeight||1;out.strokeAlignment=n.strokeAlign==='OUTSIDE'?'outer':n.strokeAlign==='CENTER'?'center':'inner';}
  const radius=n.rectangleCornerRadius||n.rectangleTopLeftCornerRadius;
  if(radius)out.cornerRadius=radius;
  if(n.type==='TEXT') {
    if(['1:631','1:636','1:726','1:731'].includes(n.sourceId)){
      const name=['1:631','1:726'].includes(n.sourceId)?'flag-gb':'flag-pl';
      if(fs.existsSync(`design/original-assets/${name}.png`)){out.type='rectangle';out.fill={type:'image',url:`./original-assets/${name}.png`,mode:'contain'};out.metadata.originalText=n.textData.characters;return out;}
    }
    const hand=n.fontName?.family==='Figma Hand'&&/[a-z]/i.test(n.textData?.characters||'');
    if(hand) {
      const p=lettering(n);
      out.type='path';out.geometry=p.geometry;out.viewBox=[0,0,n.size.x,n.size.y];out.fill=token(p.color);out.metadata.originalText=n.textData.characters;out.metadata.originalFont=n.fontName.family;return out;
    }
    out.type='text';out.content=n.textData?.characters||'';out.textGrowth='fixed-width-height';out.fontFamily=n.fontName?.family==='Figma Hand'?'Averia Serif Libre':n.fontName?.family||'Averia Serif Libre';out.fontSize=n.fontSize||20;
    out.fontWeight=/Bold/i.test(n.fontName?.style||'')?'700':/Light/i.test(n.fontName?.style||'')?'300':'400';
    out.fontStyle=/Italic/i.test(n.fontName?.style||'')?'italic':'normal';
    out.lineHeight=n.lineHeight?.units==='PIXELS'?n.lineHeight.value/out.fontSize:n.lineHeight?.value||1.4;
    out.letterSpacing=n.letterSpacing?.units==='PERCENT'?(n.letterSpacing.value||0)*out.fontSize/100:n.letterSpacing?.value||0;
    out.textAlign=({CENTER:'center',RIGHT:'right',JUSTIFIED:'justify'})[n.textAlignHorizontal]||'left';out.textAlignVertical=({CENTER:'middle',BOTTOM:'bottom'})[n.textAlignVertical]||'top';
    if(n.textDecoration==='UNDERLINE')out.underline=true;
    const styleIds=new Set(n.textData?.characterStyleIDs||[]);
    if(styleIds.size===1){const style=n.textData?.styleOverrideTable?.find(s=>s.styleID===[...styleIds][0]);if(style?.textDecoration==='UNDERLINE')out.underline=true;if(style?.hyperlink?.url)out.href=style.hyperlink.url;}
    // Preserve the source wrapping in fixed-width design frames.
    if(n.derivedTextData?.baselines?.length>1){const chars=n.textData.characters;out.content=n.derivedTextData.baselines.map(b=>chars.slice(b.firstCharacter,b.endCharacter).replace(/[\r\n]+$/,'')).join('\n');}
    return out;
  }
  if(n.type==='VECTOR') {
    out.type='path';out.viewBox=[0,0,n.size.x,n.size.y];out.geometry=(n.fillGeometry||[]).map(g=>decodePath(g.commandsBlob)).join('');
    if(!out.geometry&&n.strokeGeometry?.length)out.geometry=n.strokeGeometry.map(g=>decodePath(g.commandsBlob)).join('');
    return out;
  }
  if(n.type==='ELLIPSE'){out.type='ellipse';delete out.cornerRadius;return out;}
  if(n.type==='ROUNDED_RECTANGLE'){out.type='rectangle';return out;}
  out.layout='none';out.clip=n.frameMaskDisabled===false;
  out.children=(n.children||[]).map(penNode).filter(Boolean);
  const v=(n.fillPaints||[]).find(p=>p.type==='VIDEO');if(v)out.metadata.videoHash=hashOf(v.video?.hash);
  return out;
}
const resolved=(doc.childrenMap.get('0:1')||[]).map(n=>resolve(n));
const roots=resolved.map(penNode).filter(Boolean).map(n=>({...n,placeholder:true}));
const componentRoots=[];let x=0;
for(const raw of doc.nodes.filter(n=>n.type==='SYMBOL')){const n=penNode(resolve(raw));n.name=`Component · ${n.name}`;n.x=x;n.y=-1600;n.reusable=true;n.placeholder=true;componentRoots.push(n);x+=n.width+80;}
for(const source of sourceMedia) {
  const record=videoByHash.get(source.videoHash);
  if(record) {
    const sourcePath=`design/original-assets/${record.image.filename}`;
    await sharp(sourcePath).png().toFile(`public/media/${source.slot}.png`);
    source.playback=record.playback;
    source.posterImageHash=record.image.filename.split('.')[0];
  }
}
fs.writeFileSync('design/media-sources.json',JSON.stringify(sourceMedia,null,2)+'\n');
for(const name of ['consumer-reflection','zuzu-reflection'])await sharp(`public/media/${name}.gif`).png().toFile(`public/media/${name}.png`);
fs.writeFileSync('work/figma-original/import-trees.json',JSON.stringify([...componentRoots,...roots]));
fs.writeFileSync('outputs/verification/fig-import.json',JSON.stringify({source:input,version:doc.header.version,sourceNodes:doc.nodes.length,resolvedNodes:resolvedCount,imageAssets:images.size,videoSources:sourceMedia.length,reusableComponents:componentRoots.length,sections:roots.map(n=>n.name),issues},null,2));
console.log({sourceNodes:doc.nodes.length,resolvedNodes:resolvedCount,imageAssets:images.size,reusableComponents:componentRoots.length,sections:roots.length,issues});
