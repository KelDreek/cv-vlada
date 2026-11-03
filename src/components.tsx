import { useEffect, useRef, useState, type AnchorHTMLAttributes, type HTMLAttributes, type ImgHTMLAttributes } from 'react';
import mediaManifest from './media.json';

const links: Record<string, string> = {
  Resume: 'https://drive.google.com/file/d/1v64vH2Rv_YpIRNF-zPYYzDV_bM-IPiCW/view?usp=sharing',
  Linkedin: 'https://www.linkedin.com/in/fidrik/',
  'fidrikx@gmail.com': 'mailto:fidrikx@gmail.com',
  'App Store': 'https://apps.apple.com/us/app/animal-sounds-for-babies-zuzu/id6753817245',
  'Google Play': 'https://play.google.com/store/apps/details?id=com.ohhimark.zuzuzoo&pcampaignid=web_share',
};

export function ButtonLink({ className = '', link = 'Link' }: { className?: string; link?: string }) {
  const href = links[link];
  return <div className={className}><a className="text-link" href={href} target={href?.startsWith('https:') ? '_blank' : undefined} rel="noopener noreferrer">{link}</a></div>;
}

export function ButtonBack({ className = '', border = false }: { className?: string; border?: boolean }) {
  return <a href="/" className={`${className} back-link ${border ? 'back-link--outlined' : ''}`} data-return-home>
    {!border && <img src="/assets/28f39.svg" alt="" width="20" height="20" />}
    <span>Main page</span>
  </a>;
}

export function CaseLink({ children, className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`${className || ''} project-card case-link`} {...props}>{children}</a>;
}

export function ProgressCase({ children, className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={`${className} project-card progress-card`} tabIndex={0} {...props}>
    <span className="project-status"><img src="/lettering/in-progress.svg" alt="Case Study in Progress …" width="380" height="28" /></span>
    {children}
  </article>;
}

export function Media({ slot, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { slot: string }) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const source = (mediaManifest as Record<string, {video?: string; poster?: string}>)[slot] || {};
  const hasVideo = Boolean(source.video);
  const isLanguage = slot === 'zuzu-english' || slot === 'zuzu-polish';
  const qaStill=import.meta.env.DEV&&new URLSearchParams(location.search).has('qa');
  useEffect(() => {
    const element = root.current;
    if (!element || !hasVideo) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    const updatePlayback = () => {
      if (!inView || motion.matches) video.current?.pause();
      else if (!isLanguage && !qaStill) video.current?.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.3 });
    observer.observe(element);
    motion.addEventListener('change', updatePlayback);
    return () => { observer.disconnect(); motion.removeEventListener('change', updatePlayback); };
  }, [hasVideo, isLanguage, qaStill]);
  return <div ref={root} className={`${className} media-slot`} data-media-slot={slot} {...props}>
    {hasVideo ? <>
      <video ref={video} src={source.video} poster={source.poster} muted={!isLanguage} loop={!isLanguage} playsInline controls={isLanguage} preload="none" aria-label={slot.replaceAll('-', ' ')} onPlay={() => {
        if(isLanguage)document.querySelectorAll('video').forEach(v=>{if(v!==video.current&&!v.muted)v.pause();});
      }} />
    </> : source.poster ? <img src={source.poster} alt={slot.replaceAll('-', ' ') + ' — demonstration still'} loading={import.meta.env.DEV && new URLSearchParams(location.search).has('qa') ? 'eager' : 'lazy'} decoding="async" /> : <span className="media-unavailable" role="img" aria-label={`${slot.replaceAll('-', ' ')} video — source file required`}>Video</span>}
  </div>;
}

export function MotionImage({ slot, className = '', src, ...props }: ImgHTMLAttributes<HTMLImageElement> & {slot:string}) {
  const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(query.matches);query.addEventListener('change',change);return()=>query.removeEventListener('change',change);},[]);
  const still=reduced||(import.meta.env.DEV&&new URLSearchParams(location.search).has('qa'));
  return <div className={`${className} motion-image`} data-motion-image={slot}>
    <img {...props} loading={props.loading??'lazy'} decoding="async" src={`/media/${slot}.${still?'png':'gif'}`} />
  </div>;
}
