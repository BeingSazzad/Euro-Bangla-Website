"use client"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Award, Sparkles, MapPin, Building2, ShieldCheck, Quote, ArrowRight } from "lucide-react"
import { useT } from "@/i18n/LanguageProvider"
import { COMPANY } from "@/data/company"

const AboutOrigin = () => {
   const { t } = useT();

   const highlights = [
      {
         title: "Transparent & Upfront Fares",
         desc: "Itemized airline bookings and hotel reservations with zero hidden fees or speculative markups.",
      },
      {
         title: "Specialized Pilgrimage Leadership",
         desc: "Dedicated Mutawwif guidance, vetted Makkah and Madinah hotel blocks, and respectful care.",
      },
      {
         title: "Licensed Paris Office",
         desc: "Drop by our physical office at 65 Rue Louis Blanc, 75010 Paris for face-to-face consultation.",
      },
   ];

   return (
      <section id="heritage" className="ebt-about-origin">
         <div className="container">
            <div className="row align-items-center g-5">
               {/* Left Visual Column */}
               <div className="col-lg-6">
                  <div className="ebt-about-origin-img-wrap">
                     <div className="ebt-about-origin-img-inner">
                        <Image
                           src="/assets/img/about/origin-travel.jpg"
                           alt="Euro Bangla Travels origin and heritage in Paris"
                           width={680}
                           height={520}
                           sizes="(max-width: 991px) 100vw, 50vw"
                           className="ebt-origin-main-img"
                           priority
                        />
                        <div className="ebt-origin-glow" />
                     </div>

                     {/* Top Floating Badge */}
                     <div className="ebt-about-origin-badge-top">
                        <div className="icon-box">
                           <Award size={20} />
                        </div>
                        <div>
                           <span className="badge-title">12+ Years</span>
                           <span className="badge-sub">Of Trusted Service</span>
                        </div>
                     </div>

                     {/* Bottom Floating Badge */}
                     <div className="ebt-about-origin-year-badge">
                        <div className="badge-icon-sparkle">
                           <Sparkles size={20} />
                        </div>
                        <div>
                           <span className="year">{t("about.originYear") || "2012"}</span>
                           <span className="caption">{t("about.originYearCaption") || "Established in Paris, France"}</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Storytelling Column */}
               <div className="col-lg-6">
                  <div className="ebt-about-origin-content">
                     <span className="tg-section-subtitle mb-15">{t("about.originKicker") || "OUR HERITAGE & FOUNDATIONS"}</span>
                     <h2 className="ebt-about-origin-title">
                        Rooted in Paris, Dedicated to <span>Global Excellence</span>
                     </h2>
                     <p className="ebt-about-origin-text">
                        Established in 2012 in the heart of Paris at <strong>65 Rue Louis Blanc, 75010</strong>, Euro Bangla Travels was founded with a singular conviction: to provide the Bangladeshi and European travel community with an agency built on absolute transparency, cultural empathy, and unwavering dependability.
                     </p>
                     <p className="ebt-about-origin-text">
                        Over the past decade, we have grown from a modest neighborhood office into an internationally recognized full-service travel partner — guiding thousands of pilgrims to Makkah and Madinah, issuing verified airline tickets worldwide, and facilitating European leisure tours.
                     </p>

                     {/* Key Highlights Grid */}
                     <div className="ebt-about-origin-highlights mt-30 mb-35">
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

                     {/* Paris Office Link Strip */}
                     <div className="ebt-origin-office-strip">
                        <MapPin size={18} className="strip-icon" />
                        <span>Visit us in Paris: <Link href={COMPANY.mapLink} target="_blank" rel="noopener noreferrer">{COMPANY.address}</Link></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutOrigin;
