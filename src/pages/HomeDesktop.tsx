import { ButtonLink, ButtonBack, CaseLink, ProgressCase, Media, MotionImage } from "../components";
const assetPathPrefix = "/assets";
const imgEllipse1 = `${assetPathPrefix}/e3e92.png`;
const imgFrameCover = `${assetPathPrefix}/fb63c.png`;
const imgFrameCover1 = `${assetPathPrefix}/f9f76.png`;
const imgFrameCover2 = `${assetPathPrefix}/f67cc.png`;
const imgFrameCover3 = `${assetPathPrefix}/4bb93.png`;
const imgVector = `${assetPathPrefix}/77bbf.svg`;

export default function Desktop() {
  return (
    <div className="d0 d1 d2 d3 d4 d7 d100 d8 d9" data-node-id="1:59" data-name="Desktop">
      <div className="d1 d2 d3 d10 d4 d17 d8 d12 d13" data-node-id="1:60" data-name="section">
        <div className="d1 d2 d3 d15 d16 d17 d8 d12 d13" data-node-id="1:61" data-name="bio">
          <div className="d1 d2 d3 d34 d16 d8 d12 d13" data-node-id="1:62">
            <div className="d8 d12 d101" data-node-id="1:63">
              <img alt="Vladislav Fidrik" className="d41 d102 d42 d45 d9" height="64" src={imgEllipse1} width="64" loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
            </div>
            <h1 className="d19 d20 d21 d27 d72 d8 d12 d53 d24 d49 d73" data-node-id="1:64">
              <p className="d22 d33 d48">Vladislav Fidrik,</p>
              <p className="d48">
                <span className="d22">{`UX/UI Designer based in `}</span>
                <span className="d22">Gdańsk</span>
                <span className="d22">, Poland</span>
              </p>
            </h1>
          </div>
          <div className="d19 d26 d27 d28 d8 d12 d29 d24 d30 d13 d31" data-node-id="1:65">
            <p className="d32 d33">I design digital products and enjoy creating clean interfaces that are easy to use. I like thinking through how things work and paying attention to the small details, sometimes spending a little too long getting an interaction to feel right.</p>
            <p className="d32 d33">​</p>
            <p className="d32">{`Over the past 7 years, I’ve designed mobile and web experiences across health & wellness, social platforms, SaaS, e-commerce, and consumer services. My work spans complex user flows, design systems, and close collaboration with developers through implementation and design QA.`}</p>
          </div>
          <div className="d1 d2 d34 d4 d8 d12 d13" data-node-id="1:66" data-name="links">
            <ButtonLink className="d1 d2 d4 d61 d8 d12" link="Resume" />
            <ButtonLink className="d1 d2 d4 d61 d8 d12" link="Linkedin" />
            <ButtonLink className="d1 d2 d4 d61 d8 d12" link="fidrikx@gmail.com" />
          </div>
        </div>
        <div className="d1 d2 d3 d103 d16 d8 d12 d13" data-node-id="1:70">
          <CaseLink href="/case-study-1" className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:890" data-name="frame-case">
            <div className="d104 d1 d2 d3 d4 d61 d62 d8 d40 d12 d13" data-node-id="1:891" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="1:892" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="1:893">
                Designing the Evolution of a Consumer App: From Social Audio to Wellness
              </h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="1:894">
                <p className="d8 d12 d109" data-node-id="1:895">
                  iOS, Android, Web
                </p>
                <p className="d8 d12 d110" data-node-id="1:896">
                  4 years
                </p>
              </div>
            </div>
          </CaseLink>
          <CaseLink href="/case-study-2" className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:904" data-name="frame-case">
            <div className="d104 d1 d2 d3 d4 d61 d62 d8 d40 d12 d13" data-node-id="1:905" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover1} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="1:906" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="1:907">
                Zuzuzoo: Designing a playful learning experience for little explorers
              </h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="1:908">
                <p className="d8 d12 d111" data-node-id="1:909">
                  iOS, iPadOS, Android
                </p>
                <p className="d8 d12 d112" data-node-id="1:910">
                  6 months
                </p>
              </div>
            </div>
          </CaseLink>
          <ProgressCase className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:897" data-name="frame-progress">
            <div className="d104 d8 d40 d12 d13" data-node-id="1:898" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover2} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="1:899" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="1:900">{`Designing a premium booking experience for a sauna & ice bath studio in Dubai`}</h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="1:901">
                <p className="d8 d12 d113" data-node-id="1:902">
                  iOS, Android
                </p>
                <p className="d8 d12 d112" data-node-id="1:903">
                  4 months
                </p>
              </div>
            </div>
          </ProgressCase>
          <ProgressCase className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:911" data-name="frame-progress">
            <div className="d104 d8 d40 d12 d13" data-node-id="1:912" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover3} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="1:913" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="1:914">
                Designing a social platform that helps creators monetize their content
              </h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="1:915">
                <p className="d8 d12 d114" data-node-id="1:916">
                  Web, Mobile
                </p>
                <p className="d8 d12 d115" data-node-id="1:917">
                  1 year
                </p>
              </div>
            </div>
          </ProgressCase>
        </div>
        <div className="d1 d2 d3 d14 d16 d8 d12 d13" data-node-id="1:75">
          <div className="d1 d2 d3 d16 d8 d12 d13" data-node-id="1:76" data-name="Introvert/Extrovert">
            <div className="d116 d117 d41 d118 d119 d120" data-node-id="1:77" data-name="Vector">
              <img alt="" className="d41 d102 d42 d45 d9" src={imgVector} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
            </div>
            <div className="d121 d122 d123 d8 d12 d13" data-node-id="1:78" />
          </div>
          <p className="d19 d26 d32 d28 d8 d12 d124 d125 d66 d30 d13 d126" data-node-id="1:79">
            Last updated Oct 2026
          </p>
        </div>
      </div>
    </div>
  );
}
