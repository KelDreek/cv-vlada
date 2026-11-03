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

export default function Desktop() {
  return (
    <div className="bg-[var(--background\/primary,#fafaf9)] content-stretch flex flex-col items-center pb-[256px] pt-[64px] px-[16px] relative size-full" data-node-id="1:578" data-name="Desktop">
      <div className="content-stretch flex flex-col gap-[var(--gap-2xl,128px)] items-center max-w-[1024px] relative shrink-0 w-full" data-node-id="1:579" data-name="section">
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:580" data-name="part">
          <div className="content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:581" data-name="bio">
            <ButtonBack className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" />
            <p className="[word-break:break-word] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] text-[color:var(--text\/primary,#332e1c)] tracking-[-2.4px] w-full" data-node-id="1:583">
              Zuzuzoo: Designing a playful learning experience for little explorers
            </p>
            <div className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:584">
              <p className="leading-[1.4] mb-0">Zuzuzoo is an educational app for toddlers, featuring interactive animal games, sounds, and a playful encyclopedia.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">As the sole designer on a two-person team, I shaped the product from the ground up – from UX flows and visual identity to illustrations, animations, and final UI.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:585">
              <div className="[word-break:break-word] content-stretch flex font-['Averia_Serif_Libre:Light'] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:586">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:587">
                  Scope
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:588">
                  UX/UI Design, User Flows, Design System
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Averia_Serif_Libre:Light'] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:589">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:590">
                  Team
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:591">
                  1 Designer, 1 Developer
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Averia_Serif_Libre:Light'] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:592">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:593">
                  Platform
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:594">
                  iOS, iPadOS, Android
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:595">
                <p className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/secondary,#838074)] tracking-[-0.4px] w-[96px]" data-node-id="1:596">
                  Status
                </p>
                <p className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] whitespace-nowrap" data-node-id="1:597">{`Launched `}</p>
                <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="App Store" />
                <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="Google Play" />
              </div>
            </div>
          </div>
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:600" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:601">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-center max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:602" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:603">{`Designing for children who can't read yet`}</p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:604">
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
          <div className="aspect-[1024/640] relative shrink-0 w-full" data-node-id="1:605">
            <div className="absolute inset-0 rounded-[var(--corner,16px)]" data-node-id="1:606" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage1} />
              </div>
            </div>
            <div className="absolute inset-[13.81%_5.3%_5.11%_71.28%]" data-node-id="1:607" data-name="video" />
          </div>
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:608" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage2} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:609">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:610" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:611">
              Let the app speak for itself
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:612">
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
          <div className="content-stretch flex gap-[var(--gap-s,16px)] h-[640px] items-start relative shrink-0 w-full" data-node-id="1:628">
            <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-[1_0_0] flex-col gap-[32.681px] h-full items-center justify-center min-w-px overflow-clip pt-[32.68px] relative rounded-[16px]" data-node-id="1:629">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Figma_Hand:Bold'] items-start leading-[0] not-italic relative shrink-0 text-[#332e1c] text-center uppercase w-full" data-node-id="1:630">
                <div className="flex flex-col justify-end relative shrink-0 text-[24px] w-full" data-node-id="1:631">
                  <p className="leading-[1.4]">🇬🇧</p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 text-[18px] w-full" data-node-id="1:632">
                  <p className="leading-[1.4]">ENGLISH</p>
                </div>
              </div>
              <div className="aspect-[390/800] flex-[1_0_0] min-h-px relative" data-node-id="1:633" data-name="EN2 1" />
            </div>
            <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-[1_0_0] flex-col gap-[32.681px] h-full items-center justify-center min-w-px overflow-clip pt-[32.68px] relative rounded-[16px]" data-node-id="1:634">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Figma_Hand:Bold'] items-start leading-[0] not-italic relative shrink-0 text-[#332e1c] text-center uppercase w-full" data-node-id="1:635">
                <div className="flex flex-col justify-end relative shrink-0 text-[24px] w-full" data-node-id="1:636">
                  <p className="leading-[1.4]">🇵🇱</p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 text-[18px] w-full" data-node-id="1:637">
                  <p className="leading-[1.4]">Polski</p>
                </div>
              </div>
              <div className="aspect-[390/800] flex-[1_0_0] min-h-px relative" data-node-id="1:638" data-name="EN2 1" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:639">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:640" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:641">
              Less navigation, more playing
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:642">
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
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:643" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage3} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:644">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:645" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:646">
              A playful world built from scratch
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:647">
              <p className="leading-[1.4] mb-0">{`With no existing brand or visual system, I created Zuzuzoo's visual identity from the ground up.`}</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">The direction focused on warmth, simplicity, and playful character – combining friendly animal illustrations, bright colors, soft shapes, and large interactive elements.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Illustrations became an essential part of the visual language, helping children recognize activities and making the experience feel more engaging and approachable.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">I also developed a lightweight design system to maintain consistency across iPhone, iPad, the new foldable iPhone Duo, and Android devices, keeping components and interaction patterns intentionally simple.</p>
            </div>
          </div>
          <div className="aspect-[1024/640] overflow-clip relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:648" data-name="frame-video" />
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:649">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:650" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:651">
              Inside Zuzuzoo
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:652">
              <p className="leading-[1.4] mb-0">Zuzuzoo brings together eight playful, interactive mini-games designed to help young children discover animals through sounds, visual challenges, and simple questions.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Each activity follows clear, familiar interaction patterns, allowing children to focus on playing, exploring, and learning rather than figuring out how the interface works.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">Beyond the games, the app features an animal encyclopedia with sounds and simple facts, as well as a dedicated parent area for managing subscriptions, language preferences, and settings.</p>
            </div>
          </div>
          <div className="aspect-[1024/640] bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex gap-[32.68px] items-center justify-center overflow-clip p-[32.68px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:653" data-name="image">
            <div className="aspect-[390/844] flex-[1_0_0] min-w-px relative" data-node-id="1:654" data-name="f1" />
            <div className="aspect-[390/844] flex-[1_0_0] min-w-px relative" data-node-id="1:655" data-name="f2" />
            <div className="aspect-[390/844] flex-[1_0_0] min-w-px relative" data-node-id="1:656" data-name="f3" />
            <div className="aspect-[265.5299987792969/574.6400146484375] flex-[1_0_0] min-w-px relative" data-node-id="1:657" data-name="f4" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:658">
          <div className="content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:659" data-name="bio">
            <p className="[word-break:break-word] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] text-[color:var(--text\/primary,#332e1c)] tracking-[-2.4px] w-full" data-node-id="1:660">
              From concept to launch
            </p>
            <div className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:661">
              <p className="leading-[1.4] mb-0">What started as a small personal project gradually evolved into a fully realized mobile app. Working closely with the developer, I refined the experience through multiple design iterations, explored new ideas, and adapted the interface as the product took shape.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">{`After months of designing, building, and refining, Zuzuzoo was released on the App Store. Since launch, we've continued improving the experience, polishing the interface, and introducing new activities, with further development and expansion planned.`}</p>
            </div>
            <div className="content-stretch flex gap-[var(--gap-s,16px)] items-start relative shrink-0 w-full" data-node-id="1:662">
              <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="App Store" />
              <ButtonLink className="content-stretch flex items-center justify-center relative shrink-0" link="Google Play" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-center relative shrink-0 w-full" data-node-id="1:665">
            <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-col gap-[var(--gap-l,32px)] h-[640px] items-center justify-center overflow-clip p-[16px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:666">
              <div className="h-[200px] relative rounded-[16px] shrink-0 w-[137px]" data-node-id="1:667" data-name="animal-crossing-thinking 1">
                <img alt="Animal Crossing GIF" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAnimalCrossingThinking1} />
              </div>
              <div className="content-stretch flex items-center justify-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:668">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none min-w-px relative text-[40px] text-[color:var(--text\/primary,#332e1c)] text-center tracking-[-2.4px]" data-node-id="1:669">{`Designing for young children showed me that simplicity isn't just about removing elements – it's about creating an experience around what users can understand and do.`}</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:670">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Averia_Serif_Libre:Light'] leading-[0] min-w-px not-italic relative text-[0px] text-[color:var(--text\/secondary,#838074)] text-center tracking-[-0.4px]" data-node-id="1:671">
                <span className="leading-[1.4] text-[20px]">{`The GIF features `}</span>
                <a className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.4] text-[20px] underline" href="https://youtu.be/_3YNL0OWio0" target="_blank">
                  <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://youtu.be/_3YNL0OWio0" target="_blank">
                    Animal Crossing: New Horizons
                  </span>
                </a>
                <span className="leading-[1.4] text-[20px]">, my favorite game</span>
              </p>
            </div>
          </div>
        </div>
        <ButtonBack border className="border border-[var(--border\/primary,#332e1c)] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[24px] shrink-0" />
      </div>
    </div>
  );
}
