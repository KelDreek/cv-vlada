import fs from 'node:fs';
import sharp from 'sharp';
const used=new Set();
for(const name of fs.readdirSync('src/pages')){
 const code=fs.readFileSync('src/pages/'+name,'utf8');
 if(/https:\/\/www\.figma\.com\/api\/mcp\/asset/.test(code))throw new Error('Temporary Figma URL in '+name);
 for(const m of code.matchAll(/\$\{assetPathPrefix\}\/([^`]+)`/g))used.add(m[1]);
}
const manifest=[];
for(const name of used){
 const path='public/assets/'+name;
 if(!fs.existsSync(path)||fs.statSync(path).size===0)throw new Error('Missing asset: '+name);
 const metadata=await sharp(path).metadata();
 if(!metadata.width||!metadata.height)throw new Error('Invalid asset geometry: '+name);
 manifest.push({file:'/assets/'+name,format:metadata.format,width:metadata.width,height:metadata.height,bytes:fs.statSync(path).size});
}
for(const name of ['averia-light.ttf','averia-bold-italic.ttf'])if(fs.statSync('public/fonts/'+name).size<10000)throw new Error('Missing font: '+name);
fs.mkdirSync('outputs/verification',{recursive:true});
fs.writeFileSync('outputs/verification/asset-inventory.json',JSON.stringify(manifest,null,2));
console.log(`Verified ${manifest.length} original static assets and both self-hosted main fonts.`);
