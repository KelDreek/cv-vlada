const assetPathPrefix = "/assets";
const imgFrame = `${assetPathPrefix}/28f39.svg`;
const imgFrameImage = `${assetPathPrefix}/336cb.png`;
const imgFrameImage1 = `${assetPathPrefix}/0209f.png`;
const imgFrameImage2 = `${assetPathPrefix}/63c3b.png`;
const imgFrameImage3 = `${assetPathPrefix}/376e0.png`;
const imgFrameImage4 = `${assetPathPrefix}/6e8e5.png`;
const imgFrameImage5 = `${assetPathPrefix}/92010.png`;
const imgFrameImage6 = `${assetPathPrefix}/4bb4d.png`;
const imgFrameImage7 = `${assetPathPrefix}/fc70f.png`;
const imgFrameImage8 = `${assetPathPrefix}/75653.png`;
const imgFrameImage9 = `${assetPathPrefix}/99317.png`;
const imgFrameImage10 = `${assetPathPrefix}/d2d10.png`;
const imgSource1 = `${assetPathPrefix}/f45e1.png`;

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

export default function Desktop() {
  return (
    <div className="bg-[var(--background\/primary,#fafaf9)] content-stretch flex flex-col items-center pb-[256px] pt-[64px] px-[16px] relative size-full" data-node-id="1:216" data-name="Desktop">
      <div className="content-stretch flex flex-col gap-[var(--gap-2xl,128px)] items-center max-w-[1024px] relative shrink-0 w-full" data-node-id="1:217" data-name="section">
        <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:218" data-name="part">
          <div className="content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 w-full" data-node-id="1:219" data-name="bio">
            <ButtonBack className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" />
            <p className="[word-break:break-word] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] text-[color:var(--text\/primary,#332e1c)] tracking-[-2.4px] w-full" data-node-id="1:221">
              Designing the Evolution of a Consumer App: From Social Audio to Wellness
            </p>
            <div className="[word-break:break-word] font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#332e1c)] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:222">
              <p className="leading-[1.4] mb-0">Over four years, I worked as the sole UX/UI designer on an established consumer app, taking over design responsibilities from the previous designer. As the product evolved, I designed increasingly complex features, improved existing experiences, developed the design system, and supported a major rebrand.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">My work extended beyond mobile design to web experiences, an administration dashboard, and brand and marketing materials. I also introduced Design QA into the development workflow to help maintain implementation quality.</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Averia_Serif_Libre:Light'] gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:223">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:224">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:225">
                  Scope
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:226">
                  UX/UI/Product Design, Design System, Branding, Design QA
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:227">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:228">
                  Team
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:229">
                  Cross-functional product team
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:230">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:231">
                  Duration
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:232">
                  ~4 years
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:233">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:234">
                  Platform
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:235">
                  iOS, Android, Web
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:236">
                <p className="relative shrink-0 text-[color:var(--text\/secondary,#838074)] w-[96px]" data-node-id="1:237">
                  Status
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#332e1c)]" data-node-id="1:238">
                  Launched / NDA Project (Anonymized case study)
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:239" data-name="frame-image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
              <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
              <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xxl,80px)] items-center relative shrink-0 w-full" data-node-id="1:240" data-name="part">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:241" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:242">
              Designing Social Audio Experiences
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:243">
              <p className="leading-[1.4] mb-0">Initially, the platform focused on social audio, allowing users to create and discover recordings, engage with creators, participate in live conversations, and connect with people who shared similar interests.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">As new features were introduced, my focus was on integrating them into the existing experience without making navigation unnecessarily complex.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:244">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:245" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:246">
                Unifying content discovery
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:247">
                <p className="leading-[1.4] mb-0">Initially, the platform focused on social audio, allowing users to create and discover recordings, engage with creators, participate in live conversations, and connect with people who shared similar interests.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">As new features were introduced, my focus was on integrating them into the existing experience without making navigation unnecessarily complex.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:248" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage1} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:249">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:250" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:251">
                Simplifying audio creation
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:252">
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">As new content formats were introduced, the original creation flow needed to evolve.</p>
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">​</p>
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">Previously, the central Create action was dedicated to starting live conversations. With the introduction of recorded audio responses, users needed equally convenient access to other creation options.</p>
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">​</p>
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">I proposed transforming the existing entry point into a unified creation menu with three clear paths:</p>
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">​</p>
                <ul className="list-disc mb-0">
                  <li className="mb-0 ms-[30px]">
                    <span className="leading-[1.4]">Answer a question: Select a submitted question and record an audio response.</span>
                  </li>
                  <li className="mb-0 ms-[30px]">
                    <span className="leading-[1.4]">Create an audio post: Write a question or topic and record a response.</span>
                  </li>
                  <li className="ms-[30px]">
                    <span className="leading-[1.4]">Start a live conversation: Launch a live audio session.</span>
                  </li>
                </ul>
                <p className="leading-[1.4] mb-0 whitespace-pre-wrap">​</p>
                <p className="leading-[1.4] whitespace-pre-wrap">My goal was to make different creation actions feel like parts of one consistent experience rather than distributing them across the app.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] overflow-clip relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:253" data-name="frame-video" />
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:254">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:255" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:256">
                Connecting people through shared interests
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:257">
                <p className="leading-[1.4] mb-0">Another major feature I designed helped users discover people with similar interests, opinions, and perspectives.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">The experience consisted of two connected parts. First, users answered a collection of yes-or-no questions across different topics, gradually building a profile of their views.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">Based on shared answers, the app recommended other users through swipeable profile cards, highlighting what they had in common.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">Users could express interest or move on. When two people expressed mutual interest, they could connect through a chat.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">I designed the end-to-end experience, including user flows, interaction details, and animations, while collaborating with developers on the implementation.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">I also proposed a short voice introduction feature inspired by social media Stories, allowing users to record personal greetings displayed through a ring around their profile picture.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] overflow-clip relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:258" data-name="frame-video" />
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:259" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xxl,80px)] items-center relative shrink-0 w-full" data-node-id="1:260" data-name="part">
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:261">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:262" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:263">
                A New Direction: Everyday Wellness Takes Center Stage
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:264">
                <p className="leading-[1.4] mb-0">{`Following a change in the client's business direction, the product underwent a major rebrand and began shifting from social audio toward health and wellness.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">This introduced new primary user journeys, including step tracking and daily habits, while existing social features gradually moved into the background.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">My challenge was to integrate these new experiences into an established product and adapt its navigation to reflect the changing priorities.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:265" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage3} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:266">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:267" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:268">
                Making daily activity the new focus
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:269">
                <p className="leading-[1.4] mb-0">{`Step tracking became one of the app's primary features.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">{`I designed a new home screen displaying the user's daily step count, personal goal, and progress toward that goal.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">The feature used activity data from Apple Health and Health Connect, allowing users to follow their daily movement.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">I also worked on a social activity feature where users could add friends and see their step progress, creating opportunities for mutual encouragement.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">The main challenge was organizing these interconnected experiences into a clear home screen.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] overflow-clip relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:270" data-name="frame-video" />
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:271">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:272" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:273">
                Making healthy habits easy to track
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:274">
                <p className="leading-[1.4] mb-0">Alongside step tracking, I designed a dedicated experience for managing everyday wellness habits.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">Users could start with a default set of habits or build a personalized routine by choosing from a larger library organized into categories.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">Most habits followed a simple tap-to-complete interaction, while some activities involved additional steps, such as watching a workout video.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">I focused on keeping the experience clean and straightforward, allowing users to manage different types of habits through familiar interaction patterns.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">I also contributed to other wellness functionality, including mood tracking, as the product continued to develop.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:275" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage4} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xxl,80px)] items-center relative shrink-0 w-full" data-node-id="1:276" data-name="part">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:277" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:278">
              Rebranding at Scale
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:279">
              <p className="leading-[1.4] mb-0">When the client decided to reposition the product, I took responsibility for updating its visual identity across a large, established application.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Before starting the rebrand, I proposed four approaches ranging from a lightweight visual refresh to a more comprehensive UI redesign.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4] mb-0">Each option included visual examples, explanations of the proposed changes, and their scope and trade-offs.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">The client chose a lighter approach focused primarily on refreshing the visual language rather than rebuilding the entire interface.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:280">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:281" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:282">
                Applying the new visual direction
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:283">
                <p className="leading-[1.4] mb-0">The biggest challenge was applying the updated visual direction consistently across hundreds of existing designs while product development continued.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">I used the component library to update shared styles, colors, and UI elements across the application, then reviewed and refined individual screens according to their priority and requirements.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">This helped make a large-scale update more manageable without redesigning every screen from scratch.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:284" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage5} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:285">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:286" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:287">
                Evolving the design system
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:288">
                <p className="leading-[1.4] mb-0">The product already had a basic design system when I joined, but I substantially reworked and expanded it over time.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">{`I introduced more reusable components, improved the library's structure, and adopted new Figma capabilities to simplify design maintenance.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">The system became especially valuable during the rebrand, allowing changes to shared components to propagate across large numbers of screens.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">It also helped maintain consistency as new features and platforms continued to evolve.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:289" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage6} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xxl,80px)] items-center relative shrink-0 w-full" data-node-id="1:290" data-name="part">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:291" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:292">
              Beyond the Mobile App
            </p>
            <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:293">
              <p className="leading-[1.4] mb-0">As the sole designer on the project, my responsibilities extended beyond iOS and Android applications.</p>
              <p className="leading-[1.4] mb-0">​</p>
              <p className="leading-[1.4]">I also supported several connected products and visual touchpoints, maintaining consistency while adapting interfaces to different platforms and purposes.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:294">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:295" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:296">
                Web experiences and administration tools
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:297">
                <p className="leading-[1.4] mb-0">{`I maintained and expanded the platform's web administration dashboard, designing new functionality and updating existing interfaces as the product evolved.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">I also worked on web versions of selected app features, including live audio conversations, recorded responses, and user profiles.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">These experiences required adapting functionality and interface patterns to web environments while keeping them consistent with the wider product.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:298" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage7} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:299">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:300" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:301">
                Branding and marketing
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:302">
                <p className="leading-[1.4] mb-0">Alongside product design, I created and maintained a range of brand and promotional materials.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">My responsibilities included updating logos and app icons, preparing App Store and Google Play screenshots, maintaining the product website, and designing promotional graphics and banners.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">{`One of the highlights was when the app was selected as Apple's App of the Day and featured on the App Store's main page. I was responsible for preparing the promotional artwork for the feature, following Apple's design guidelines and requirements.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">During the rebrand, I also helped apply the updated visual identity across different touchpoints, maintaining a consistent brand experience beyond the app itself.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:303" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage8} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--gap-xxl,80px)] items-center relative shrink-0 w-full" data-node-id="1:304" data-name="part">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:305" data-name="bio">
            <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[40px] tracking-[-2.4px] w-full" data-node-id="1:306">
              Taking Ownership Beyond Figma
            </p>
            <p className="font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full" data-node-id="1:307">
              Over time, my responsibilities grew beyond designing individual features. I became increasingly involved in how designs were implemented, reviewed, and maintained throughout development.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:308">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:309" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:310">
                Introducing Design QA
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:311">
                <p className="leading-[1.4] mb-0">{`Early in the project, I proposed introducing a dedicated Design QA stage to the team's workflow.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">The goal was to take direct responsibility for checking the quality of implemented interfaces while allowing QA engineers to focus more closely on functional testing.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">We established a process where developers shared screenshots, videos, and task details in a dedicated Slack channel after completing UI-related work.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">I reviewed the implementation, identified visual or interaction issues, and provided annotated feedback directly in discussion threads.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">Once I approved the design, the task could move forward to technical QA.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">This became a regular part of our development process, helping us address everything from small visual inconsistencies to larger issues involving animations and interaction behavior.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">The approach also attracted interest from colleagues on other projects, who asked me to demonstrate how our Design QA workflow was organized.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:312" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage9} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:313">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:314" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:315">
                Participating in Apple Entrepreneur Camp
              </p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[0px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:316">
                <p className="mb-0 text-[20px]">
                  <span className="leading-[1.4]">{`Another valuable experience was participating in `}</span>
                  <a className="[text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-['Averia_Serif_Libre:Light'] leading-[1.4] not-italic tracking-[-0.4px] underline" href="https://developer.apple.com/news/?id=g2414inv" target="_blank">
                    <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://developer.apple.com/news/?id=g2414inv" target="_blank">
                      Apple Entrepreneur Camp
                    </span>
                  </a>
                  <span className="leading-[1.4]">{` as part of the product team.`}</span>
                </p>
                <p className="leading-[1.4] mb-0 text-[20px]">​</p>
                <p className="leading-[1.4] mb-0 text-[20px]">Over approximately three months, we joined remote sessions with Apple representatives, presented our work, and received feedback and guidance.</p>
                <p className="leading-[1.4] mb-0 text-[20px]">​</p>
                <p className="leading-[1.4] mb-0 text-[20px]">{`I contributed to preparing presentations and promotional materials and participated in the team's learning and feedback sessions.`}</p>
                <p className="leading-[1.4] mb-0 text-[20px]">​</p>
                <p className="leading-[1.4] text-[20px]">The program provided an opportunity to learn from Apple experts and bring new perspectives back into our work.</p>
              </div>
            </div>
            <div className="aspect-[1024/640] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:317" data-name="frame-image">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--corner,16px)]">
                <div className="absolute bg-[var(--background\/secondary,#f1f1ef)] inset-0 rounded-[var(--corner,16px)]" />
                <img alt="Case study image" className="absolute max-w-none object-cover rounded-[var(--corner,16px)] size-full" src={imgFrameImage10} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--gap-xl,48px)] items-center relative shrink-0 w-full" data-node-id="1:318">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--gap-l,32px)] items-start max-w-[640px] relative shrink-0 text-[color:var(--text\/primary,#332e1c)] w-full" data-node-id="1:319" data-name="bio">
              <p className="font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none relative shrink-0 text-[32px] tracking-[-2px] w-full" data-node-id="1:320">{`Outcomes & Reflection`}</p>
              <div className="font-['Averia_Serif_Libre:Light'] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap" data-node-id="1:321">
                <p className="leading-[1.4] mb-0">Over four years, I supported numerous feature releases, a major product rebrand, and the expansion of the platform across mobile and web.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">As the sole UX/UI designer, I was responsible not only for creating new interfaces, but also for maintaining design consistency and supporting their implementation.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">{`One of my most meaningful contributions was introducing Design QA as a regular part of the team's workflow.`}</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4] mb-0">This project taught me to think beyond individual features, plan for future changes, and adapt to evolving business and product requirements.</p>
                <p className="leading-[1.4] mb-0">​</p>
                <p className="leading-[1.4]">It also strengthened my ability to collaborate across disciplines, communicate design decisions, and find practical compromises.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--gap-s,16px)] items-center relative shrink-0 w-full" data-node-id="1:322">
              <div className="bg-[var(--background\/secondary,#f1f1ef)] content-stretch flex flex-col gap-[var(--gap-l,32px)] h-[640px] items-center justify-center overflow-clip p-[16px] relative rounded-[var(--corner,16px)] shrink-0 w-full" data-node-id="1:323">
                <div className="h-[180px] relative rounded-[16px] shrink-0 w-[215px]" data-node-id="1:324" data-name="source 1">
                  <img alt="Michael Scott GIF" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgSource1} />
                </div>
                <div className="content-stretch flex items-center justify-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:325">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Averia_Serif_Libre:Bold_Italic'] italic leading-none min-w-px relative text-[40px] text-[color:var(--text\/primary,#332e1c)] text-center tracking-[-2.4px]" data-node-id="1:326">{`The biggest lesson was that product design doesn't end with delivering screens – it also means taking responsibility for how the experience evolves and how it's brought to life.`}</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center max-w-[640px] relative shrink-0 w-full" data-node-id="1:327">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Averia_Serif_Libre:Light'] leading-[0] min-w-px not-italic relative text-[0px] text-[color:var(--text\/secondary,#838074)] text-center tracking-[-0.4px]" data-node-id="1:328">
                  <span className="leading-[1.4] text-[20px]">{`The GIF features `}</span>
                  <a className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.4] text-[20px] underline" href="https://youtu.be/IBJJrZ5LAVQ" target="_blank">
                    <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://youtu.be/IBJJrZ5LAVQ" target="_blank">
                      Michael Scott
                    </span>
                  </a>
                  <span className="leading-[1.4] text-[20px]">{` from my favorite TV show, The Office`}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ButtonBack border className="border border-[var(--border\/primary,#332e1c)] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[24px] shrink-0" />
      </div>
    </div>
  );
}
