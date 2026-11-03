import fs from 'node:fs';
const sources=JSON.parse(fs.readFileSync('design/media-sources.json','utf8'));
const available={};
const nonempty=path=>fs.existsSync(path)&&fs.statSync(path).size>0;
for(const {slot} of sources){
 const video=['mp4','webm'].find(ext=>nonempty(`public/media/${slot}.${ext}`));
 const poster=['png','jpg','webp'].find(ext=>nonempty(`public/media/${slot}.${ext}`));
 if(video||poster)available[slot]={...(video?{video:`/media/${slot}.${video}`} : {}),...(poster?{poster:`/media/${slot}.${poster}`} : {})};
}
fs.writeFileSync('src/media.json',JSON.stringify(available,null,2)+'\n');
const missing=sources.filter(s=>s.visible&&!available[s.slot]?.video).map(s=>s.slot);
console.log(`Media: ${sources.filter(s=>s.visible).length-missing.length}/10 visible original videos available.`);
if(missing.length)console.log('Original sources still required: '+missing.join(', '));
