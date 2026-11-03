const assetPathPrefix = "/assets";
const imgFrame = `${assetPathPrefix}/28f39.svg`;
const imgFrameImage = `${assetPathPrefix}/69dc1.png`;
const imgFrameImage1 = `${assetPathPrefix}/47404.png`;
const imgFrameImage2 = `${assetPathPrefix}/672e2.png`;
const imgFrameImage3 = `${assetPathPrefix}/77ed7.png`;
const imgAnimalCrossingThinking1 = `${assetPathPrefix}/aa7a9.png`;

type ButtonBackProps = {
  className?: string;
  border?: boolean;
  hover?: boolean;
};

function ButtonBack({ className, border = false, hover = false }: ButtonBackProps) {
  const isBorderAndFalse = border && !hover;
  return (
    <div className={className || `content-stretch flex gap-[8px] items-center relative ${isBorderAndFalse ? String.raw`border border-[var(--border\/primary,#332e1c)] border-solid px-[16px] py-[8px] rounded-[24px]` : ""}`} id={isBorderAndFalse ? "node-1_198" : "node-1_188"}>
      {!border && !hover && (
        <div className="relative shrink-0 size-[20px]" data-node-id="1:189" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
      )}
      <p className={`${String.raw`[word-break:break-word] font-["Averia_Serif_Libre:Light"] leading-[1.4] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] whitespace-nowrap `}${isBorderAndFalse ? "" : "[text-underline-position:from-font] decoration-from-font decoration-solid underline"}`} id={isBorderAndFalse ? "node-1_202" : "node-1_192"}>
        Main page
      </p>
    </div>
  );
}

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
    <div className="bg-[var(--background\/primary,#fafaf9)] content-stretch flex flex-col items-center pb-[256px] pt-[64px] px-[16px] relative size-full" data-node-id="1:673" data-name="Mobile">
      <div className="content-stretch flex flex-col gap-[var(--gap-2xl,128px)] items-center max-w-[1024px] relative shrink-0 w-full" data-node-id="1:674" data-name="section">
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:675" data-name="part">
          <div className="content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:676" data-name="bio">
            <ButtonBack className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" />
            <p className="[word-break:break-word] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] text-[color:var(--text\/primary,#332e1c)] tracking-[-2.4px] w-full" data-node-id="1:678">
              Zuzuzoo: Designing a playful learning experience for little explorers
            </p>
            <div className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:679">
              <p className="leading-[1.4] mb-0">Zuzuzoo is an educational app for toddlers, featuring interactive animal games, sounds, and a playful encyclopedia.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">As the sole designer on a two-person team, I shaped the product from the ground up – from UX flows and visual identity to illustrations, animations, and final UI.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:680">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Averia_Serif_Libre:Light'] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:681">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:682">
                  Scope
                </p>
                <p className="min-w-full relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-[min-content]" data-node-id="1:683">
                  UX/UI Design, User Flows, Design System
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Averia_Serif_Libre:Light'] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:684">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:685">
                  Team
                </p>
                <p className="min-w-full relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-[min-content]" data-node-id="1:686">
                  1 Designer, 1 Developer
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Averia_Serif_Libre:Light'] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:687">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:688">
                  Platform
                </p>
                <p className="min-w-full relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-[min-content]" data-node-id="1:689">
                  iOS, iPadOS, Android
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:690">
                <p className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/secondary,#838074)] tracking-[-0.4px] w-[96px]" data-node-id="1:691">
                  Status
                </p>
                <p className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] whitespace-nowrap" data-node-id="1:692">{`Launched `}</p>
                <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="App Store" />
                <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="Google Play" />
              </div>
            </div>
          </div>
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:695" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:696">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-center max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:697" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:698">{`Designing for children who can't read yet`}</p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:699">
              <p className="leading-[1.4] mb-0">{`Designing for toddlers meant rethinking familiar UI patterns. Text labels, complex navigation, and small interactive elements weren't suitable for an audience still learning to read and navigate digital experiences.`}</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">My early concepts followed more conventional app patterns, but through exploration and iteration, I gradually shifted toward a simpler, more playful approach.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">I replaced text-heavy interfaces with large illustrations, increased touch target sizes, simplified navigation, and introduced a brighter visual language.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">The goal was to make the experience understandable without requiring children to learn how to use the interface first.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">The goal was to make the experience understandable without requiring children to learn how to use the interface first.</p>
            </div>
          </div>
          <div className="aspect-[343/214.375] relative shrink-0 w-full" data-node-id="1:700">
            <div className="absolute inset-0 rounded-[var(--corner,16px)]" data-node-id="1:701" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage1} />
              </div>
            </div>
            <div className="absolute inset-[13.82%_5.38%_5.01%_71.18%]" data-node-id="1:702" data-name="video" />
          </div>
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:703" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage2} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:704">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:705" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:706">
              Let the app speak for itself
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:707">
              <p className="leading-[1.4] mb-0">One of my key UX decisions was replacing written instructions with voice guidance.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">{`Instead of relying on text, Zuzuzoo uses a friendly voice to introduce games, ask questions, and provide feedback on children's actions.`}</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Each interaction has multiple voice variations with different wording and intonation, making the experience feel more natural and less repetitive.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">{`Voice guidance is available in 10 languages, allowing children to explore the app in their family's preferred language.`}</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">By moving instructions from text to audio, I could simplify the interface while keeping children guided throughout the experience.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--gap-s,16px)] h-[384px] items-start relative shrink-0 w-full" data-node-id="1:723">
            <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-[1_0_0] flex-col gap-[32.681px] h-full items-center justify-center min-w-px overflow-clip pt-[32.68px] relative rounded-[16px]" data-node-id="1:724">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Figma_Hand:Bold'] items-start leading-[0] not-italic relative shrink-0 text-[#332e1c] text-center uppercase w-full" data-node-id="1:725">
                <div className="flex flex-col justify-end relative shrink-0 text-[24px] w-full" data-node-id="1:726">
                  <p className="leading-[1.4]">🇬🇧</p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 text-[18px] w-full" data-node-id="1:727">
                  <p className="leading-[1.4]">ENGLISH</p>
                </div>
              </div>
              <div className="aspect-[390/800] flex-[1_0_0] min-h-px relative" data-node-id="1:728" data-name="EN2 1" />
            </div>
            <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-[1_0_0] flex-col gap-[32.681px] h-full items-center justify-center min-w-px overflow-clip pt-[32.68px] relative rounded-[16px]" data-node-id="1:729">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Figma_Hand:Bold'] items-start leading-[0] not-italic relative shrink-0 text-[#332e1c] text-center uppercase w-full" data-node-id="1:730">
                <div className="flex flex-col justify-end relative shrink-0 text-[24px] w-full" data-node-id="1:731">
                  <p className="leading-[1.4]">🇵🇱</p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 text-[18px] w-full" data-node-id="1:732">
                  <p className="leading-[1.4]">Polski</p>
                </div>
              </div>
              <div className="aspect-[390/800] flex-[1_0_0] min-h-px relative" data-node-id="1:733" data-name="EN2 1" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:734">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:735" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:736">
              Less navigation, more playing
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:737">
              <p className="leading-[1.4] mb-0">Another important decision was simplifying how children move between activities.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Instead of relying on traditional navigation, I designed the game menu as a central hub connecting the entire experience.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Each game consists of five short rounds. After completing them, children automatically return to the hub, where a friendly voice invites them to choose another activity.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">They can also leave a game early or replay it.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">This repeatable loop reduces unnecessary navigation decisions and makes moving between games feel natural.</p>
            </div>
          </div>
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:738" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage3} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:739">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:740" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:741">
              A playful world built from scratch
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:742">
              <p className="leading-[1.4] mb-0">{`With no existing brand or visual system, I created Zuzuzoo's visual identity from the ground up.`}</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">The direction focused on warmth, simplicity, and playful character – combining friendly animal illustrations, bright colors, soft shapes, and large interactive elements.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Illustrations became an essential part of the visual language, helping children recognize activities and making the experience feel more engaging and approachable.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">I also developed a lightweight design system to maintain consistency across iPhone, iPad, the new foldable iPhone Duo, and Android devices, keeping components and interaction patterns intentionally simple.</p>
            </div>
          </div>
          <div className="aspect-[1024/640] overflow-clip relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:743" data-name="frame-video" />
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:744">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:745" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:746">
              Inside Zuzuzoo
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:747">
              <p className="leading-[1.4] mb-0">Zuzuzoo brings together eight playful, interactive mini-games designed to help young children discover animals through sounds, visual challenges, and simple questions.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Each activity follows clear, familiar interaction patterns, allowing children to focus on playing, exploring, and learning rather than figuring out how the interface works.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">Beyond the games, the app features an animal encyclopedia with sounds and simple facts, as well as a dedicated parent area for managing subscriptions, language preferences, and settings.</p>
            </div>
          </div>
          <div className="aspect-[343/214.375] bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[16px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:748" data-name="image">
            <div className="aspect-[311/673.035888671875] flex-[1_0_0] min-w-px relative" data-node-id="1:749" data-name="f2" />
            <div className="aspect-[390/844] flex-[1_0_0] min-w-px relative" data-node-id="1:750" data-name="f1" />
            <div className="aspect-[390/844] flex-[1_0_0] min-w-px relative" data-node-id="1:751" data-name="f3" />
            <div className="aspect-[311/673.035888671875] flex-[1_0_0] min-w-px relative" data-node-id="1:752" data-name="f4" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:753">
          <div className="content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:754" data-name="bio">
            <p className="[word-break:break-word] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] text-[color:var(--text\/primary,#332e1c)] tracking-[-2.4px] w-full" data-node-id="1:755">
              From concept to launch
            </p>
            <div className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:756">
              <p className="leading-[1.4] mb-0">What started as a small personal project gradually evolved into a fully realized mobile app. Working closely with the developer, I refined the experience through multiple design iterations, explored new ideas, and adapted the interface as the product took shape.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">{`After months of designing, building, and refining, Zuzuzoo was released on the App Store. Since launch, we've continued improving the experience, polishing the interface, and introducing new activities, with further development and expansion planned.`}</p>
            </div>
            <div className="content-stretch flex gap-[var(--gap-s,16px)] items-start relative shrink-0 w-full" data-node-id="1:757">
              <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="App Store" />
              <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="Google Play" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-center relative shrink-0 w-full" data-node-id="1:760">
            <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-col gap-[var(--gap-l,32px)] h-[640px] items-center justify-center overflow-clip p-[16px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:761">
              <div className="h-[200px] relative rounded-[16px] shrink-0 w-[137px]" data-node-id="1:762" data-name="animal-crossing-thinking 1">
                <img alt="Animal Crossing GIF" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAnimalCrossingThinking1} />
              </div>
              <div className="content-stretch flex items-center justify-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:763">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none min-w-px relative text-[32px] text-[color:var(--text\/primary,#332e1c)] text-center tracking-[-2px]" data-node-id="1:764">{`Designing for young children showed me that simplicity isn't just about removing elements – it's about creating an experience around what users can understand and do.`}</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:765">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Averia_Serif_Libre:Light'] leading-[0] min-w-px not-italic relative text-[20px] text-[color:var(--text\/secondary,#838074)] text-center tracking-[-0.4px]" data-node-id="1:766">
                <span className="leading-[1.4]">{`The GIF features `}</span>
                <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.4] underline" href="https://youtu.be/_3YNL0OWio0" target="_blank">
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://youtu.be/_3YNL0OWio0" target="_blank">
                    Animal Crossing: New Horizons
                  </span>
                </a>
                <span className="leading-[1.4]">, my favorite game</span>
              </p>
            </div>
          </div>
        </div>
        <ButtonBack border className="border border-[var(--border\/primary,#332e1c)] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[24px] shrink-0" />
      </div>
    </div>
  );
}
