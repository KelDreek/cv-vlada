import fs from 'node:fs';
import sharp from 'sharp';
fs.mkdirSync('outputs/verification',{recursive:true});
const results=[];
for(const [name,ref,w,h] of [['home-desktop','home',1280,3384],['case1-desktop','case1',1022,16000],['case2-desktop','case2',1278,10000],['home-mobile','home-mobile-reference',131,1024],['case1-mobile','case1-mobile-reference',21,1024]]){
 if(!fs.existsSync(`work/reference/${ref}.png`))continue;
 const rm=await sharp(`work/reference/${ref}.png`).metadata();
 const capture=fs.existsSync(`outputs/${name}.png`)?`outputs/${name}.png`:`work/browser/${name}.png`;
 const bm=await sharp(capture).metadata();
 const targetW=rm.width,targetH=rm.height;
 const cropW=name.endsWith('mobile')?(name.startsWith('home')?399:375):1280;
 const height=JSON.parse(fs.readFileSync(`work/browser/${name}.json`,'utf8')).height;
 const a=await sharp(`work/reference/${ref}.png`).removeAlpha().raw().toBuffer();
 const b=await sharp(capture).extract({left:0,top:0,width:cropW,height:Math.min(Math.ceil(height),bm.height)}).resize(targetW,targetH,{fit:'fill'}).removeAlpha().raw().toBuffer();
 let sum=0,changed=0;
 for(let i=0;i<a.length;i+=3){let max=0;for(let c=0;c<3;c++){const d=Math.abs(a[i+c]-b[i+c]);sum+=d;max=Math.max(max,d);}if(max>20)changed++;}
 const difference=Buffer.alloc(a.length);for(let i=0;i<a.length;i++)difference[i]=Math.min(255,Math.abs(a[i]-b[i])*4);
 await sharp(difference,{raw:{width:targetW,height:targetH,channels:3}}).png().toFile(`outputs/verification/${name}-difference.png`);
 results.push({screen:name,meanAbsoluteChannelDifference:sum/a.length,pixelsWithDifferenceOver20Percent:changed/(a.length/3)*100,note:name==='home-desktop'?'Full home comparison; tiny fractional height rounding.':'Reference rescaled; case comparisons include known missing video sources. Not a pixel-perfect certification.'});
}
fs.writeFileSync('outputs/verification/pixel-comparison.json',JSON.stringify(results,null,2));
console.log(results);
