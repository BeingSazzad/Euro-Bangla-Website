"use client"
import Image from "next/image"
import { Compass, Globe, ShieldCheck, HeartHandshake, CheckCircle2, Award, Sparkles, MapPin, PhoneCall, Check } from "lucide-react"
import { useT } from "@/i18n/LanguageProvider"
import { COMPANY } from "@/data/company"

const AboutMissionVision = () => {
   const { t } = useT();

   const missionPillars = [
      "Guaranteed transparent fares with zero hidden booking surcharges",
      "Specialized, spiritually guided Hajj & Umrah group packages",
      "Verified flight routes, hotel allotments & meticulous visa compliance",
   ];

   const visionPillars = [
      "Expanding direct European holiday packages & global carrier access",
      "Setting the benchmark for diaspora travel hospitality across Europe",
      "Fostering lifelong relationships built on unconditional client advocacy",
   ];

   const coreValues = [
      {
         icon: <ShieldCheck size={22} />,
         title: "Absolute Transparency",
         subtitle: "Honest & Verified",
         desc: "Upfront pricing with zero hidden surcharges. Truthful visa assessments and confirmed bookings you can depend on.",
      },
      {
         icon: <HeartHandshake size={22} />,
         title: "Devoted Pilgrimage Care",
         subtitle: "Sacred Commitment",
         desc: "Comprehensive Hajj & Umrah guidance from Paris to the Holy Cities, with vetted hotels near the Haramain.",
      },
      {
         icon: <Globe size={22} />,
         title: "Multilingual Empathy",
         subtitle: "Deep Cultural Care",
         desc: "Personalized consultations in Bengali, French, English, and Urdu, respecting your traditions and individual needs.",
      },
      {
         icon: <PhoneCall size={22} />,
         title: "Unwavering Support",
         subtitle: "Always Reachable",
         desc: "Our Paris head office combined with 24/7 passenger assistance ensures you are never alone while abroad.",
      },
   ];

   return (
      <section className="ebt-mission-vision ebt-section">
         <div className="container">
            {/* Section Header */}
            <div className="row justify-content-center text-center mb-55">
               <div className="col-xl-8 col-lg-9">
                  <div className="ebt-mv-header">
                     <span className="ebt-mv-kicker">MISSION, VISION & VALUES</span>
                     <h2 className="ebt-mv-title">
                        Anchored in Trust, <span>Connecting Worlds</span>
                     </h2>
                     <p className="ebt-mv-lead">
                        Since establishing our Paris headquarters in 2012, Euro Bangla Travels has bridged continents, cultures, and sacred aspirations with honest counsel, curated journeys, and genuine hospitality.
                     </p>
                  </div>
               </div>
            </div>

            {/* Split Showcase: Master Image on Left, Mission & Vision on Right */}
            <div className="row g-4 align-items-stretch mb-55">
               {/* Left Column: Authentic Brand Visual with Glass Badges */}
               <div className="col-lg-5">
                  <div className="ebt-mv-visual-box h-100">
                     <div className="ebt-mv-img-wrapper">
                        <Image
                           src="/assets/img/about/mission-vision.jpg"
                           alt="Euro Bangla Travels European & Global Journey"
                           width={720}
                           height={840}
                           sizes="(max-width: 991px) 100vw, 42vw"
                           className="ebt-mv-main-img"
                           priority
                        />
                        <div className="ebt-mv-img-overlay"></div>

                        {/* Top Floating Badge */}
                        <div className="ebt-mv-float-badge ebt-mv-float-badge--top">
                           <div className="badge-icon-box">
                              <MapPin size={18} />
                           </div>
                           <div className="badge-text-box">
                              <span className="badge-line1">Paris Headquarters</span>
                              <span className="badge-line2">65 Rue Louis Blanc, 75010</span>
                           </div>
                        </div>

                        {/* Bottom Floating Badge */}
                        <div className="ebt-mv-float-badge ebt-mv-float-badge--bottom">
                           <div className="badge-icon-box badge-icon-box--gold">
                              <Award size={20} />
                           </div>
                           <div className="badge-text-box">
                              <span className="badge-line1">12+ Years of Excellence</span>
                              <span className="badge-line2">15,000+ Happy Travelers</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Column: Mission & Vision Cards */}
               <div className="col-lg-7">
                  <div className="ebt-mv-cards-column d-flex flex-column justify-content-between h-100 gap-4">
                     {/* Mission Card */}
                     <div className="ebt-mv-statement-card ebt-mv-statement-card--mission">
                        <div className="card-top-header">
                           <div className="card-icon-pill card-icon-pill--blue">
                              <Compass size={22} />
                              <span>OUR MISSION</span>
                           </div>
                           <span className="card-motto">Empowering Seamless Journeys</span>
                        </div>
                        <h3 className="card-headline">
                           Making Worldwide Travel & Sacred Pilgrimages Accessible, Honest, and Stress-Free.
                        </h3>
                        <p className="card-desc">
                           We exist to remove the friction and anxiety of international travel. Through upfront pricing, verified airline ticketing, and deep expertise in Hajj, Umrah, and visa facilitation, we deliver journeys crafted with absolute clarity and personal care.
                        </p>
                        <div className="card-checklist">
                           {missionPillars.map((pillar, idx) => (
                              <div key={idx} className="card-check-item">
                                 <span className="check-bullet check-bullet--blue">
                                    <Check size={14} strokeWidth={3} />
                                 </span>
                                 <span>{pillar}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Vision Card */}
                     <div className="ebt-mv-statement-card ebt-mv-statement-card--vision">
                        <div className="card-top-header">
                           <div className="card-icon-pill card-icon-pill--gold">
                              <Globe size={22} />
                              <span>OUR VISION</span>
                           </div>
                           <span className="card-motto">Europe’s Premier Diaspora Bridge</span>
                        </div>
                        <h3 className="card-headline">
                           To Stand as the Most Trusted, Respected, and Innovative Travel Institution in Europe.
                        </h3>
                        <p className="card-desc">
                           We envision a future where every traveler from Europe and Bangladesh experiences world-class hospitality, transparent guidance, and progressive travel technology — forging a legacy of trust that spans generations.
                        </p>
                        <div className="card-checklist">
                           {visionPillars.map((pillar, idx) => (
                              <div key={idx} className="card-check-item">
                                 <span className="check-bullet check-bullet--gold">
                                    <Check size={14} strokeWidth={3} />
                                 </span>
                                 <span>{pillar}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Section: 4 Core Pillars of Excellence */}
            <div className="ebt-mv-values-container">
               <div className="ebt-mv-values-intro text-center mb-35">
                  <h4 className="values-title">The Principles We Live By Every Day</h4>
                  <p className="values-subtitle">
                     Core values forged over a decade of serving families, pilgrims, students, and global explorers.
                  </p>
               </div>

               <div className="row g-4">
                  {coreValues.map((val, i) => (
                     <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                        <div className="ebt-mv-value-box h-100">
                           <div className="value-icon-wrapper">
                              {val.icon}
                           </div>
                           <div className="value-body">
                              <span className="value-sub">{val.subtitle}</span>
                              <h5 className="value-heading">{val.title}</h5>
                              <p className="value-text">{val.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutMissionVision;
