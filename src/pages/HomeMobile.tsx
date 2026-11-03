import { ButtonLink, ButtonBack, CaseLink, ProgressCase, Media, MotionImage } from "../components";
const assetPathPrefix = "/assets";
const imgEllipse1 = `${assetPathPrefix}/e3e92.png`;
const imgFrameCover = `${assetPathPrefix}/fb63c.png`;
const imgFrameCover1 = `${assetPathPrefix}/f9f76.png`;
const imgFrameCover2 = `${assetPathPrefix}/f67cc.png`;
const imgFrameCover3 = `${assetPathPrefix}/4bb93.png`;
const imgVector = `${assetPathPrefix}/77bbf.svg`;

export default function Mobile() {
  return (
    <div className="d0 d1 d2 d3 d4 d7 d100 d8 d9" data-node-id="1:80" data-name="Mobile">
      <div className="d1 d2 d3 d10 d4 d17 d8 d12 d13" data-node-id="1:81" data-name="section">
        <div className="d1 d2 d3 d15 d16 d17 d8 d12 d13" data-node-id="1:82" data-name="bio">
          <div className="d1 d2 d3 d34 d16 d8 d12 d13" data-node-id="1:83">
            <div className="d8 d12 d101" data-node-id="1:84">
              <img alt="Vladislav Fidrik" className="d41 d102 d42 d45 d9" height="64" src={imgEllipse1} width="64" loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
            </div>
            <h1 className="d19 d20 d21 d27 d72 d8 d12 d53 d24 d49 d73" data-node-id="1:85">
              <p className="d22 d33 d48">Vladislav Fidrik,</p>
              <p className="d22 d48">UX/UI Designer based in Gdańsk, Poland</p>
            </h1>
          </div>
          <div className="d19 d26 d27 d28 d8 d12 d29 d24 d30 d13 d31" data-node-id="1:86">
            <p className="d32 d33">I design digital products and enjoy creating clean interfaces that are easy to use. I like thinking through how things work and paying attention to the small details, sometimes spending a little too long getting an interaction to feel right.</p>
            <p className="d32 d33">​</p>
            <p className="d32">{`Over the past 7 years, I’ve designed mobile and web experiences across health & wellness, social platforms, SaaS, e-commerce, and consumer services. My work spans complex user flows, design systems, and close collaboration with developers through implementation and design QA.`}</p>
          </div>
          <div className="d1 d2 d3 d34 d16 d8 d12 d13" data-node-id="1:87" data-name="links">
            <ButtonLink className="d1 d2 d4 d61 d8 d12" link="Resume" />
            <ButtonLink className="d1 d2 d4 d61 d8 d12" link="Linkedin" />
            <ButtonLink className="d1 d2 d4 d61 d8 d12" link="fidrikx@gmail.com" />
          </div>
        </div>
        <div className="d1 d2 d3 d103 d16 d8 d12 d13" data-node-id="1:91">
          <CaseLink href="/case-study-1" className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:92" data-name="frame-case">
            <div className="d104 d1 d2 d3 d4 d61 d62 d8 d40 d12 d13" data-node-id="I1:92;219:753" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="I1:92;219:768" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="I1:92;219:769">
                Designing the Evolution of a Consumer App: From Social Audio to Wellness
              </h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="I1:92;219:771">
                <p className="d8 d12" data-node-id="I1:92;219:772">
                  iOS, Android, Web
                </p>
                <p className="d8 d12" data-node-id="I1:92;219:773">
                  4 years
                </p>
              </div>
            </div>
          </CaseLink>
          <CaseLink href="/case-study-2" className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:93" data-name="frame-case">
            <div className="d104 d1 d2 d3 d4 d61 d62 d8 d40 d12 d13" data-node-id="I1:93;219:753" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover1} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="I1:93;219:768" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="I1:93;219:769">
                Zuzuzoo: Designing a playful learning experience for little explorers
              </h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="I1:93;219:771">
                <p className="d8 d12" data-node-id="I1:93;219:772">
                  iOS, iPadOS, Android
                </p>
                <p className="d8 d12" data-node-id="I1:93;219:773">
                  6 months
                </p>
              </div>
            </div>
          </CaseLink>
          <ProgressCase className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:94" data-name="frame-progress">
            <div className="d104 d8 d40 d12 d13" data-node-id="I1:94;221:656" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover2} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="I1:94;221:657" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="I1:94;221:658">{`Designing a premium booking experience for a sauna & ice bath studio in Dubai`}</h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="I1:94;221:659">
                <p className="d8 d12" data-node-id="I1:94;221:660">
                  iOS, Android
                </p>
                <p className="d8 d12" data-node-id="I1:94;221:661">
                  4 months
                </p>
              </div>
            </div>
          </ProgressCase>
          <ProgressCase className="d1 d2 d3 d59 d16 d17 d8 d12 d13" data-node-id="1:95" data-name="frame-progress">
            <div className="d104 d8 d40 d12 d13" data-node-id="I1:95;221:656" data-name="frame-cover">
              <div className="d41 d42 d43 d40">
                <div className="d41 d44 d42 d40" />
                <img alt="" className="d41 d45 d46 d40 d9" src={imgFrameCover3} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
              </div>
            </div>
            <div className="d19 d1 d2 d3 d105 d16 d17 d8 d12 d24 d13" data-node-id="I1:95;221:657" data-name="frame-info">
              <h2 className="d20 d21 d22 d8 d12 d48 d49 d13" data-node-id="I1:95;221:658">
                Designing a social platform that helps creators monetize their content
              </h2>
              <div className="d106 d2 d107 d26 d108 d16 d32 d28 d8 d12 d29 d30 d13 d75" data-node-id="I1:95;221:659">
                <p className="d8 d12" data-node-id="I1:95;221:660">
                  Web, Mobile
                </p>
                <p className="d8 d12" data-node-id="I1:95;221:661">
                  1 year
                </p>
              </div>
            </div>
          </ProgressCase>
        </div>
        <div className="d1 d2 d3 d14 d16 d8 d12 d13" data-node-id="1:96">
          <div className="d1 d2 d3 d16 d8 d12 d13" data-node-id="1:97" data-name="Introvert/Extrovert">
            <div className="d116 d117 d41 d127 d119 d120" data-node-id="1:98" data-name="Vector">
              <img alt="" className="d41 d102 d42 d45 d9" src={imgVector} loading={import.meta.env.DEV && new URLSearchParams(location.search).has("qa") ? "eager" : "lazy"} decoding="async" />
            </div>
            <div className="d121 d122 d123 d8 d12 d13" data-node-id="1:99" />
          </div>
          <p className="d19 d26 d32 d28 d8 d12 d124 d125 d66 d30 d13 d126" data-node-id="1:100">
            Last updated Oct 2026
          </p>
        </div>
      </div>
    </div>
  );
}
