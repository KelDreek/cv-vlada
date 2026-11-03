import fs from 'node:fs';
import ts from 'typescript';

fs.mkdirSync('src/pages', {recursive:true});
const rules = new Map();
const unknown = new Set();
const simple = {
 'flex':'display:flex','block':'display:block','inline':'display:inline','contents':'display:contents',
 'flex-col':'flex-direction:column','flex-wrap':'flex-wrap:wrap','items-center':'align-items:center','items-start':'align-items:flex-start',
 'justify-center':'justify-content:center','justify-end':'justify-content:flex-end','content-stretch':'align-content:stretch','content-start':'align-content:flex-start',
 'relative':'position:relative','absolute':'position:absolute','shrink-0':'flex-shrink:0','w-full':'width:100%','h-full':'height:100%',
 'size-full':'width:100%;height:100%','min-w-full':'min-width:100%','min-w-px':'min-width:1px','min-h-px':'min-height:1px',
 'max-w-none':'max-width:none','inset-0':'inset:0','mb-0':'margin-bottom:0','leading-none':'line-height:1',
 'not-italic':'font-style:normal','italic':'font-style:italic','underline':'text-decoration-line:underline',
 'decoration-from-font':'text-decoration-thickness:from-font','decoration-solid':'text-decoration-style:solid',
 'whitespace-nowrap':'white-space:nowrap','whitespace-pre-wrap':'white-space:pre-wrap',
 'object-cover':'object-fit:cover','overflow-clip':'overflow:clip','pointer-events-none':'pointer-events:none',
 'text-center':'text-align:center','uppercase':'text-transform:uppercase','cursor-pointer':'cursor:pointer',
 'border':'border-width:1px','border-solid':'border-style:solid','opacity-5':'opacity:.05',
 'left-1/2':'left:50%','top-1/2':'top:50%','-translate-x-1/2':'translate:-50% -50%','-translate-y-1/2':'translate:-50% -50%',
 'list-disc':'list-style-type:disc',
 'source-lettering':'display:block;margin-left:auto;margin-right:auto;flex-shrink:0',
};
function declaration(token){
 if(simple[token]) return simple[token];
 if(token.startsWith('font-[')) {
  if(token.includes('Figma_Hand'))return 'font-family:"Figma Hand","Averia Serif Libre",serif;font-weight:700';
  return `font-family:"Averia Serif Libre",serif;font-weight:${token.includes('Bold')?'700':'300'}`;
 }
 if(token[0]==='[')return token.slice(1,-1).replaceAll('_',' ').replace(/calc\(50%\+([^)]+)\)/g,'calc(50% + $1)');
 const m=token.match(/^([a-z-]+)-\[(.*)\]$/);if(!m){unknown.add(token);return '';}
 const [,key,raw]=m;
 let val=raw.replaceAll('\\/','-').replaceAll('/primary','-primary').replaceAll('/secondary','-secondary').replaceAll('_',' ').replace(/calc\(50%\+([^)]+)\)/g,'calc(50% + $1)');
 if(key==='text')return val.startsWith('color:')?'color:'+val.slice(6):/^#|^var\(/.test(val)?'color:'+val:'font-size:'+val;
 if(key==='bg')return 'background:'+val;
 if(key==='border')return 'border-color:'+val;
 if(key==='size')return 'width:'+val+';height:'+val;
 if(key==='aspect')return 'aspect-ratio:'+val;
 const properties={w:'width',h:'height','max-w':'max-width','min-w':'min-width','min-h':'min-height',gap:'gap',leading:'line-height',tracking:'letter-spacing',rounded:'border-radius',p:'padding',pt:'padding-top',pb:'padding-bottom',ps:'padding-inline-start',ms:'margin-inline-start',left:'left',top:'top',inset:'inset',flex:'flex',opacity:'opacity'};
 if(key==='px')return `padding-left:${val};padding-right:${val}`;
 if(key==='py')return `padding-top:${val};padding-bottom:${val}`;
 if(properties[key])return properties[key]+':'+val;
 unknown.add(token);return '';
}
function classes(value){
 const list=value.split(/\s+/).filter(Boolean);return list.map(t=>{
  if(!rules.has(t))rules.set(t,{name:'d'+rules.size,decl:declaration(t)});
  return rules.get(t).name;
 }).join(' ');
}
const caseRoutes={'1:890':'/case-study-1','1:904':'/case-study-2','1:92':'/case-study-1','1:93':'/case-study-2'};
const media={
 '1:253':'audio-creation','1:367':'audio-creation','1:258':'shared-interests','1:372':'shared-interests','1:270':'daily-activity','1:384':'daily-activity',
 '1:607':'zuzu-game','1:702':'zuzu-game','1:633':'zuzu-english','1:728':'zuzu-english','1:638':'zuzu-polish','1:733':'zuzu-polish',
 '1:648':'zuzu-world','1:743':'zuzu-world','1:654':'zuzu-game','1:750':'zuzu-game','1:655':'zuzu-encyclopedia','1:749':'zuzu-encyclopedia','1:656':'zuzu-parents','1:751':'zuzu-parents','1:657':'zuzu-subscription','1:752':'zuzu-subscription'
};
const inlineImages={};
for(const file of fs.readdirSync('design/source').filter(f=>f.endsWith('.tsx'))){
 let text=fs.readFileSync('design/source/'+file,'utf8');
 const prefix=text.slice(0,text.indexOf('\ntype ')).replace(/const assetPathPrefix = "[^"]+";/,'const assetPathPrefix = publicPath("assets");');
 const body=text.slice(text.indexOf('export default function'));
 text='import { ButtonLink, ButtonBack, CaseLink, ProgressCase, Media, MotionImage } from "../components";\nimport { publicPath } from "../paths";\n'+prefix+'\n'+body;
 const source=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const replacements=[];
 let firstHeading=true;let lastHeading='Product design';
 function visit(n){
  if(ts.isJsxElement(n)||ts.isJsxSelfClosingElement(n)){
   const open=ts.isJsxElement(n)?n.openingElement:n;
   const attrs={};for(const a of open.attributes.properties){if(ts.isJsxAttribute(a)&&a.initializer&&ts.isStringLiteral(a.initializer))attrs[a.name.getText(source)]=a.initializer.text;}
   const id=attrs['data-node-id'];
   const exactWidth={'1:895':161,'1:896':62,'1:909':186,'1:910':82,'1:902':113,'1:903':82,'1:916':109,'1:917':51};
   const sourceMetrics=['1:79','1:100'].includes(id)?' leading-[22px]':exactWidth[id]?` w-[${exactWidth[id]}px]`:'';
   if(sourceMetrics)for(const a of open.attributes.properties)if(ts.isJsxAttribute(a)&&a.name.getText(source)==='className'&&a.initializer&&ts.isStringLiteral(a.initializer))replacements.push([a.initializer.getStart(source),a.initializer.end,JSON.stringify(a.initializer.text+sourceMetrics)]);
   if(['1:632','1:637','1:727','1:732'].includes(id)&&ts.isJsxElement(n)){
    const english=['1:632','1:727'].includes(id);
    const svg=fs.readFileSync('public/lettering/'+(english?'english':'polski')+'.svg','utf8');
    const width=svg.match(/width="([^"]+)"/)[1],height=svg.match(/height="([^"]+)"/)[1];
    replacements.push([open.end,n.closingElement.getStart(source),`<img className="source-lettering" src="/lettering/${english?'english':'polski'}.svg" width="${width}" height="${height}" alt="${english?'ENGLISH':'POLSKI'}" />`]);
    return;
   }
   if(['1:631','1:636','1:726','1:731'].includes(id)){
    for(const a of open.attributes.properties)if(ts.isJsxAttribute(a)&&a.name.getText(source)==='className'&&a.initializer&&ts.isStringLiteral(a.initializer))replacements.push([a.initializer.getStart(source),a.initializer.end,JSON.stringify(a.initializer.text+' h-[34px]')]);
    if(ts.isJsxElement(n))replacements.push([open.end,n.closingElement.getStart(source),`<img className="source-lettering" src="/lettering/${['1:631','1:726'].includes(id)?'flag-gb':'flag-pl'}.png" width="24" height="34" alt="" />`]);
   }
   if(caseRoutes[id]&&ts.isJsxElement(n)){
    replacements.push([open.getStart(source),open.end,open.getText(source).replace('<div','<CaseLink href="'+caseRoutes[id]+'"')],[n.closingElement.getStart(source),n.closingElement.end,'</CaseLink>']);
   }
   if(file.startsWith('Home')&&attrs['data-name']==='frame-progress'&&ts.isJsxElement(n)){
    replacements.push([open.getStart(source),open.end,open.getText(source).replace('<div','<ProgressCase')],[n.closingElement.getStart(source),n.closingElement.end,'</ProgressCase>']);
   }
   if(media[id]){
    replacements.push([n.getStart(source),n.end,`<Media slot="${media[id]}" className="${attrs.className||''}" data-node-id="${id}" />`]);
    return;
   }
   if(['1:64','1:85'].includes(id)&&ts.isJsxElement(n)){
    replacements.push([open.getStart(source),open.getStart(source)+4,'<h1'],[n.closingElement.getStart(source),n.closingElement.end,'</h1>']);
   }
   if(open.tagName.getText(source)==='p'&&attrs.className?.includes('Bold_Italic')&&ts.isJsxElement(n)){
    lastHeading=n.children.map(c=>ts.isJsxText(c)?c.text:ts.isJsxExpression(c)&&c.expression&&('text' in c.expression)?c.expression.text:'').join('').trim().replace(/\s+/g,' ');
    const tag=file.startsWith('Home')?'h2':firstHeading?'h1':attrs.className.includes('40px')?'h2':'h3';firstHeading=false;
    replacements.push([open.getStart(source),open.getStart(source)+2,'<'+tag],[n.closingElement.getStart(source),n.closingElement.end,'</'+tag+'>']);
    if(id==='1:698')replacements.push([open.end,n.closingElement.getStart(source),"Designing for<br />children who can't<br />read yet"]);
   }
   if(open.tagName.getText(source)==='img'){
    const srcAttr=open.attributes.properties.find(a=>ts.isJsxAttribute(a)&&a.name.getText(source)==='src');
    const srcText=srcAttr?.getText(source)||'';
    if(srcText.includes('imgSource1')||srcText.includes('imgAnimalCrossingThinking1'))replacements.push([open.getStart(source),open.getStart(source)+4,`<MotionImage slot="${srcText.includes('imgSource1')?'consumer-reflection':'zuzu-reflection'}"`]);
    for(const a of open.attributes.properties)if(ts.isJsxAttribute(a)&&a.name.getText(source)==='alt'&&a.initializer&&ts.isStringLiteral(a.initializer)){
     let alt=a.initializer.text;
     if(file.startsWith('Home'))alt=alt==='photo'?'Vladislav Fidrik':'';
     else if(alt==='Case study image')alt='Product design examples: '+lastHeading;
     replacements.push([a.initializer.getStart(source),a.initializer.end,JSON.stringify(alt)]);
    }
   }
   if(open.tagName.getText(source)==='span'){
    for(const a of open.attributes.properties)if(ts.isJsxAttribute(a)&&['href','target'].includes(a.name.getText(source)))replacements.push([a.getStart(source),a.end,'']);
   }
  }
  ts.forEachChild(n,visit);
 }
 visit(source);
 for(const [start,end,value] of replacements.sort((a,b)=>b[0]-a[0]))text=text.slice(0,start)+value+text.slice(end);
 // Preserve the supplied wording exactly for the first fidelity pass.
 text=text.replace(/ aria-hidden\b/g,'').replace(/src="(\/lettering\/[^\"]+)"/g,(_,v)=>`src={publicPath(${JSON.stringify(v)})}`).replace(/className="([^"]*)"/g,(_,v)=>`className="${classes(v)}"`);
 text=text.replace(/(<img\b[^>]*?)(\s*\/>)/g,(_,a,b)=>a+' loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async"'+b);
 fs.writeFileSync('src/pages/'+file,text);
}
fs.writeFileSync('src/design.css',[...rules.values()].map(r=>'.'+r.name+'{'+r.decl+'}').join('\n'));
fs.writeFileSync('work/css-map.json',JSON.stringify(Object.fromEntries(rules),null,2));
fs.writeFileSync('work/media-slots.json',JSON.stringify(media,null,2));
if(unknown.size){console.error('Unmapped styles:',[...unknown]);process.exitCode=1;}
console.log('Prepared six layouts;',rules.size,'design rules');
