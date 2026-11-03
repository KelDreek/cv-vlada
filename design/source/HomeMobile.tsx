const assetPathPrefix = "/assets";
const imgEllipse1 = `${assetPathPrefix}/e3e92.png`;
const imgFrameCover = `${assetPathPrefix}/fb63c.png`;
const imgFrameCover1 = `${assetPathPrefix}/f9f76.png`;
const imgFrameCover2 = `${assetPathPrefix}/f67cc.png`;
const imgFrameCover3 = `${assetPathPrefix}/4bb93.png`;
const imgVector = `${assetPathPrefix}/77bbf.svg`;

type ButtonLinkProps = {
  className?: string;
  hover?: boolean;
  link?: string;
};

function ButtonLink({ className, hover = false, link = "Link" }: ButtonLinkProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative"} data-node-id="1:17">
      <a className="[text-underline-position:from-font] [word-break:break-word] block cursor-pointer decoration-from-font decoration-solid font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] underline whitespace-nowrap" href="https://www.fidrik.com" data-node-id="1:18" target="_blank">
        {link}
      </a>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[var(--background\/primary,#fafaf9)] content-stretch flex flex-col items-center px-[16px] py-[var(--gap-2xl,128px)] relative size-full" data-node-id="1:80" data-name="Mobile">
      <div className="content-stretch flex flex-col gap-[var(--gap-2xl,128px)] items-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:81" data-name="section">
        <div className="content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:82" data-name="bio">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:83">
            <div className="relative shrink-0 size-[64px]" data-node-id="1:84">
              <img alt="photo" className="absolute block inset-0 max-w-none size-full" height="64" src={imgEllipse1} width="64" />
            </div>
            <div className="[word-break:break-word] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-[0] min-w-full relative shrink-0 text-[0px] text-[color:var(--text\/primary,#332e1c)] tracking-[-2px] w-[min-content]" data-node-id="1:85">
              <p className="leading-none mb-0 text-[32px]">Vladislav Fidrik,</p>
              <p className="leading-none text-[32px]">UX/UI Designer based in Gdańsk, Poland</p>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:86">
            <p className="leading-[1.4] mb-0">I design digital products and enjoy creating clean interfaces that are easy to use. I like thinking through how things work and paying attention to the small details, sometimes spending a little too long getting an interaction to feel right.</p>
            <p className="leading-[1.4] mb-0">​</p>
            <p className="leading-[1.4]">{`Over the past 7 years, I’ve designed mobile and web experiences across health & wellness, social platforms, SaaS, e-commerce, and consumer services. My work spans complex user flows, design systems, and close collaboration with developers through implementation and design QA.`}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:87" data-name="links">
            <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="Resume" />
            <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="Linkedin" />
            <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="fidrikx@gmail.com" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-node-id="1:91">
          <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:92" data-name="frame-case">
            <div className="aspect-[640/400] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="I1:92;219:753" data-name="frame-cover">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study cover" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameCover} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="I1:92;219:768" data-name="frame-info">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="I1:92;219:769">
                Designing the Evolution of a Consumer App: From Social Audio to Wellness
              </p>
              <div className="content-start flex flex-wrap font-['Averia_Serif_Libre:Light'] gap-[var(--gap-s,8px_16px)] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-nowrap" data-node-id="I1:92;219:771">
                <p className="relative shrink-0" data-node-id="I1:92;219:772">
                  iOS, Android, Web
                </p>
                <p className="relative shrink-0" data-node-id="I1:92;219:773">
                  4 years
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:93" data-name="frame-case">
            <div className="aspect-[640/400] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="I1:93;219:753" data-name="frame-cover">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study cover" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameCover1} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="I1:93;219:768" data-name="frame-info">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="I1:93;219:769">
                Zuzuzoo: Designing a playful learning experience for little explorers
              </p>
              <div className="content-start flex flex-wrap font-['Averia_Serif_Libre:Light'] gap-[var(--gap-s,8px_16px)] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-nowrap" data-node-id="I1:93;219:771">
                <p className="relative shrink-0" data-node-id="I1:93;219:772">
                  iOS, iPadOS, Android
                </p>
                <p className="relative shrink-0" data-node-id="I1:93;219:773">
                  6 months
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:94" data-name="frame-progress">
            <div className="aspect-[640/400] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="I1:94;221:656" data-name="frame-cover">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study cover" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameCover2} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="I1:94;221:657" data-name="frame-info">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="I1:94;221:658">{`Designing a premium booking experience for a sauna & ice bath studio in Dubai`}</p>
              <div className="content-start flex flex-wrap font-['Averia_Serif_Libre:Light'] gap-[var(--gap-s,8px_16px)] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-nowrap" data-node-id="I1:94;221:659">
                <p className="relative shrink-0" data-node-id="I1:94;221:660">
                  iOS, Android
                </p>
                <p className="relative shrink-0" data-node-id="I1:94;221:661">
                  4 months
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:95" data-name="frame-progress">
            <div className="aspect-[640/400] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="I1:95;221:656" data-name="frame-cover">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study cover" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameCover3} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="I1:95;221:657" data-name="frame-info">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="I1:95;221:658">
                Designing a social platform that helps creators monetize their content
              </p>
              <div className="content-start flex flex-wrap font-['Averia_Serif_Libre:Light'] gap-[var(--gap-s,8px_16px)] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-nowrap" data-node-id="I1:95;221:659">
                <p className="relative shrink-0" data-node-id="I1:95;221:660">
                  Web, Mobile
                </p>
                <p className="relative shrink-0" data-node-id="I1:95;221:661">
                  1 year
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-start relative shrink-0 w-full" data-node-id="1:96">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:97" data-name="Introvert/Extrovert">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[32px] top-1/2" data-node-id="1:98" data-name="Vector">
              <img alt="Star" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <div className="bg-[var(--elements\/primary,#332e1c)] h-[2px] opacity-5 relative shrink-0 w-full" data-node-id="1:99" />
          </div>
          <p className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#838074)] text-center tracking-[-0.4px] w-full" data-node-id="1:100">
            Last updated Oct 2026
          </p>
        </div>
      </div>
    </div>
  );
}
