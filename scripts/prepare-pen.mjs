import fs from 'node:fs';
const screens=[['home-desktop','Home · Desktop',0],['home-mobile','Home · Mobile',1360],['case1-desktop','Consumer App · Desktop',2000],['case1-mobile','Consumer App · Mobile',3360],['case2-desktop','Zuzuzoo · Desktop',4000],['case2-mobile','Zuzuzoo · Mobile',5360]];
function color(value){
 if(!value||value==='transparent')return undefined;
 const m=value.match(/rgba?\(([^)]+)\)/);if(!m)return value;
 const a=m[1].split(',').map(Number);if(a[3]===0)return undefined;
 return '#'+a.slice(0,3).map(x=>Math.round(x).toString(16).padStart(2,'0')).join('')+(a.length>3&&a[3]!==1?Math.round(a[3]*255).toString(16).padStart(2,'0'):'');
}
function token(c){return {'#fafaf9':'$background-primary','#f1f1ef':'$background-secondary','#332e1c':'$text-primary','#838074':'$text-secondary'}[c]||c;}
function convert(n,parent){
 if(n.w<=0||n.h<=0)return null;
 const s=n.style;
 const common={name:n.name||n.text?.replaceAll('\n',' ').slice(0,72)||n.tag.toLowerCase(),x:n.x-(parent?.x||0),y:n.y-(parent?.y||0),width:n.w,height:n.h};
 if(n.id)common.metadata={type:'figma',nodeId:n.id};
 if(+s.opacity!==1)common.opacity=+s.opacity;
 if(n.src){return {...common,type:'rectangle',cornerRadius:parseFloat(s.radius)||undefined,fill:{type:'image',url:'../public'+n.src,mode:'contain'}};}
 if(n.text){
  const size=parseFloat(s.size)||20;
  return {...common,type:'text',content:n.text,textGrowth:s.whiteSpace==='nowrap'?'auto':'fixed-width',fontFamily:s.font.includes('Figma Hand')?'Figma Hand':'Averia Serif Libre',fontSize:size,fontWeight:s.weight,fontStyle:s.italic,lineHeight:(parseFloat(s.line)||size*1.4)/size,letterSpacing:parseFloat(s.spacing)||0,textAlign:s.align==='start'?'left':s.align,underline:s.textDecoration.includes('underline'),fill:token(color(s.color)),...(n.href?{href:n.href}:{})};
 }
 const bg=color(s.background);
 const out={...common,type:'frame',layout:'none',cornerRadius:parseFloat(s.radius)||undefined,...(bg?{fill:token(bg)}:{}),clip:['hidden','clip'].includes(s.overflow),children:n.children.map(c=>convert(c,n)).filter(Boolean)};
 if(parseFloat(s.borderWidth)>0){out.stroke=color(s.borderColor);out.strokeWidth=parseFloat(s.borderWidth);}
 return out;
}
const trees=screens.map(([file,name,x])=>{
 const data=JSON.parse(fs.readFileSync(`work/browser/${file}.json`,'utf8'));
 const node=convert(data.tree,null);node.name=name;node.x=x;node.y=200;node.width=data.width;node.height=data.height;node.clip=true;node.placeholder=true;
 return node;
});
fs.writeFileSync('work/pen-trees.json',JSON.stringify(trees));
console.log('Prepared',trees.length,'editable screen trees');
