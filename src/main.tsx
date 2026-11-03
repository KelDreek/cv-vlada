import { useEffect, useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import HomeDesktop from './pages/HomeDesktop';
import HomeMobile from './pages/HomeMobile';
import CaseOneDesktop from './pages/CaseOneDesktop';
import CaseOneMobile from './pages/CaseOneMobile';
import CaseTwoDesktop from './pages/CaseTwoDesktop';
import CaseTwoMobile from './pages/CaseTwoMobile';
import './styles.css';
import './design.css';

type Position = { y: number; focus?: string };
const pages: Record<string, {title:string;desktop:typeof HomeDesktop;mobile:typeof HomeMobile}> = {
  '/': {title:'Vladislav Fidrik — UX/UI Designer',desktop:HomeDesktop,mobile:HomeMobile},
  '/case-study-1': {title:'Consumer App: From Social Audio to Wellness — Vladislav Fidrik',desktop:CaseOneDesktop,mobile:CaseOneMobile},
  '/case-study-2': {title:'Zuzuzoo — Vladislav Fidrik',desktop:CaseTwoDesktop,mobile:CaseTwoMobile},
};
function readPositions():Record<string,Position> { try{return JSON.parse(sessionStorage.getItem('portfolio-positions')||'{}');}catch{return {};}}
function App(){
 const [path,setPath]=useState(location.pathname.replace(/\/$/,'')||'/');
 const [mobile,setMobile]=useState(matchMedia('(max-width: 719px)').matches);
 const page=pages[path];
 useEffect(()=>{
  const m=matchMedia('(max-width: 719px)');const listener=()=>setMobile(m.matches);
  m.addEventListener('change',listener);return()=>m.removeEventListener('change',listener);
 },[]);
 useLayoutEffect(()=>{document.title=page?.title||'Page not found — Vladislav Fidrik';},[page]);
 useEffect(()=>{
  history.scrollRestoration='manual';let navigating=false;let currentPath=location.pathname;
  let pending: {destination:string;back:boolean;pop:boolean}|undefined;
  const navigate=async(destination:string,back:boolean,pop=false)=>{
   if(navigating){pending={destination,back,pop};return;}navigating=true;
   const active=document.activeElement as HTMLElement|null;
   const positions=readPositions();positions[currentPath]={y:scrollY,focus:active?.closest('[data-node-id]')?.getAttribute('data-node-id')||undefined};
   sessionStorage.setItem('portfolio-positions',JSON.stringify(positions));
   const apply=()=>{
    if(!pop)history.pushState({},'',destination);
    flushSync(()=>setPath(destination));currentPath=destination;
    const target=back?positions[destination]:undefined;
    window.scrollTo({top:target?.y||0,left:0,behavior:'instant'});
    const focus=target?.focus?document.querySelector<HTMLElement>(`[data-node-id="${CSS.escape(target.focus)}"]`):document.querySelector<HTMLElement>('h1');
    if(focus){if(!focus.matches('a[href],button,input,select,textarea,[tabindex]'))focus.tabIndex=-1;focus.focus({preventScroll:true});}
   };
   const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
   if(document.startViewTransition&&!reduced){
    try{await document.startViewTransition(apply).finished;}catch{if(location.pathname!==destination)apply();}
   }else if(reduced){apply();}
   else{const main=document.querySelector('main')!;await main.animate([{opacity:1},{opacity:0}],{duration:130,fill:'forwards'}).finished;apply();main.getAnimations().forEach(a=>a.cancel());await main.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:250,easing:'cubic-bezier(.22,1,.36,1)'}).finished;}
   navigating=false;
   if(pending){const next=pending;pending=undefined;void navigate(next.destination,next.back,next.pop);}
  };
  const click=(e:MouseEvent)=>{
   const a=(e.target as Element).closest<HTMLAnchorElement>('a[href]');
   if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank'||a.hasAttribute('download'))return;
   const url=new URL(a.href);if(url.origin!==location.origin||url.hash||!pages[url.pathname]||url.pathname===location.pathname)return;
   e.preventDefault();void navigate(url.pathname,a.hasAttribute('data-return-home'));
  };
  const pop=()=>{void navigate(location.pathname,true,true);};
  document.addEventListener('click',click);window.addEventListener('popstate',pop);
  return()=>{document.removeEventListener('click',click);window.removeEventListener('popstate',pop);};
 },[]);
 if(!page)return <main className="not-found"><h1>Page not found</h1><a href="/">Back to the main page</a></main>;
 const Screen=mobile?page.mobile:page.desktop;
 return <><a href="#main" className="skip-link">Skip to content</a><main id="main" data-route={path}><Screen /></main></>;
}

createRoot(document.getElementById('root')!).render(<App/>);
