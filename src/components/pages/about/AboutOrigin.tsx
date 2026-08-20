"use client"
import Image from "next/image"
import { CheckCircle2, Award, Sparkles } from "lucide-react"
import { useT } from "@/i18n/LanguageProvider"

const AboutOrigin = () => {
   const { t } = useT();

   const highlights = [
      { title: "Honest Guidance", desc: "Transparent advice & personalized travel planning" },
      { title: "Quality Service", desc: "Curated luxury, holiday & holy pilgrimage packages" },
      { title: "Complete Trust", desc: "Serving thousands of happy travelers since 2012" },
   ];

   return (
      <section id="origin" className="ebt-about-origin ebt-section">
         <div className="container">
            <div className="row align-items-center g-5">
               <div className="col-lg-6">
                  <div className="ebt-about-origin-img-wrap">
                     <div className="ebt-about-origin-img-inner">
                        <Image
                           src="/assets/img/about/origin-travel.jpg"
                           alt="Euro Bangla Travels origin and heritage"
                           width={650}
                           height={480}
                           sizes="(max-width: 768px) 100vw, 50vw"
                           className="ebt-origin-main-img"
                           priority
                        />
                        <div className="ebt-origin-glow"></div>
                     </div>

                     {/* Top Floating Badge */}
                     <div className="ebt-about-origin-badge-top">
                        <div className="icon-box">
                           <Award size={20} />
                        </div>
                        <div>
                           <span className="badge-title">12+ Years</span>
                           <span className="badge-sub">Of Excellence</span>
                        </div>
                     </div>

                     {/* Main Bottom Floating Badge */}
                     <div className="ebt-about-origin-year-badge">
                        <div className="badge-icon-sparkle">
                           <Sparkles size={20} />
                        </div>
                        <div>
                           <span className="year">{t("about.originYear")}</span>
                           <span className="caption">{t("about.originYearCaption")}</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6">
                  <div className="ebt-about-origin-content">
                     <h5 className="tg-section-subtitle mb-15">{t("about.originKicker")}</h5>
                     <h2 className="ebt-about-origin-title">
                        {t("about.originTitle")}{" "}
                        <span>{t("about.originTitleHighlight")}</span>
                     </h2>
                     <p className="ebt-about-origin-text">{t("about.originText1")}</p>
                     <p className="ebt-about-origin-text">{t("about.originText2")}</p>

                     {/* Key Highlights Grid */}
                     <div className="ebt-about-origin-highlights">
                        {highlights.map((h, i) => (
                           <div key={i} className="ebt-origin-highlight-item">
                              <div className="highlight-icon">
                                 <CheckCircle2 size={18} />
                              </div>
                              <div>
                                 <h5 className="highlight-title">{h.title}</h5>
                                 <p className="highlight-desc">{h.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutOrigin
