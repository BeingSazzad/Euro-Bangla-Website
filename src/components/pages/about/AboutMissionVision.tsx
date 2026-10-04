"use client"
import { Compass, Globe2, ShieldCheck, CheckCircle2, HeartHandshake, Sparkles, Award } from "lucide-react"

const AboutMissionVision = () => {
   const cards = [
      {
         badge: "OUR MISSION",
         badgeClass: "badge-mission",
         icon: <Compass size={28} />,
         title: "Empowering Seamless Global Journeys",
         description: "To deliver transparent, reliable, and deeply attentive travel solutions. Whether embarking on a sacred pilgrimage or vacationing across continents, we eliminate the anxiety of travel with personalized care.",
         pillars: [
            "Transparent pricing with zero hidden booking fees",
            "Specialized Hajj & Umrah package management",
            "End-to-end flight, hotel, and visa documentation support",
         ],
         accentColor: "#0284c7",
         bgGradient: "linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0.02) 100%)",
         iconBg: "rgba(2, 132, 199, 0.12)",
         iconColor: "#0284c7",
         borderColor: "rgba(2, 132, 199, 0.2)",
      },
      {
         badge: "OUR VISION",
         badgeClass: "badge-vision",
         icon: <Globe2 size={28} />,
         title: "Europe's Most Trusted Travel Companion",
         description: "To be universally recognized as the leading diaspora-rooted travel agency bridging Europe, Bangladesh, and the world — celebrated for ethical operations, customer advocacy, and premier travel hospitality.",
         pillars: [
            "Expanding direct international airline & hotel networks",
            "Setting the industry standard for spiritual pilgrimage care",
            "Fostering lifelong relationships built on mutual trust",
         ],
         accentColor: "#7c3aed",
         bgGradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%)",
         iconBg: "rgba(124, 58, 237, 0.12)",
         iconColor: "#7c3aed",
         borderColor: "rgba(124, 58, 237, 0.2)",
      },
      {
         badge: "CORE VALUES",
         badgeClass: "badge-values",
         icon: <ShieldCheck size={28} />,
         title: "Integrity, Empathy & Excellence",
         description: "Our values define every conversation, itinerary, and booking we handle. For more than 12 years, we have treated our travelers like family, putting your comfort and peace of mind before anything else.",
         pillars: [
            "Uncompromising honesty in all advice and recommendations",
            "Multilingual empathy that respects cultural and spiritual needs",
            "24/7 dedicated support when you need assistance abroad",
         ],
         accentColor: "#d97706",
         bgGradient: "linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.02) 100%)",
         iconBg: "rgba(217, 119, 6, 0.12)",
         iconColor: "#d97706",
         borderColor: "rgba(217, 119, 6, 0.2)",
      },
   ];

   const statsHighlight = [
      { icon: <Award size={20} />, title: "12+ Years of Trust", desc: "Proudly serving the European and Bangladeshi community" },
      { icon: <HeartHandshake size={20} />, title: "100% Client Centric", desc: "Tailored itineraries aligned with your schedule & budget" },
      { icon: <Sparkles size={20} />, title: "Ethical & Transparent", desc: "No hidden charges, honest visa advice, confirmed bookings" },
   ];

   return (
      <section className="ebt-mission-vision ebt-section">
         <div className="container">
            {/* Header */}
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 text-center">
                  <div className="mb-45">
                     <h5 className="tg-section-subtitle mb-15">Purpose & Principles</h5>
                     <h2 className="ebt-mission-vision-title">
                        Driven by Purpose, <span>Guided by Trust</span>
                     </h2>
                     <p className="ebt-mission-vision-lead">
                        Since our inception in 2012, Euro Bangla Travels has been rooted in the belief that travel should be accessible, honest, and spiritually fulfilling.
                     </p>
                  </div>
               </div>
            </div>

            {/* 3 Pillar Cards */}
            <div className="row g-4 mb-45">
               {cards.map((c, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                     <div
                        className="ebt-mv-card h-100"
                        style={{
                           background: "#ffffff",
                           border: `1px solid ${c.borderColor}`,
                           borderRadius: "20px",
                           padding: "36px 28px",
                           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                           display: "flex",
                           flexDirection: "column",
                           transition: "all 0.35s ease",
                        }}
                     >
                        <div className="d-flex align-items-center justify-content-between mb-25">
                           <div
                              style={{
                                 width: "56px",
                                 height: "56px",
                                 borderRadius: "16px",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 background: c.iconBg,
                                 color: c.iconColor,
                              }}
                           >
                              {c.icon}
                           </div>
                           <span
                              style={{
                                 fontSize: "12px",
                                 fontWeight: 700,
                                 letterSpacing: "1px",
                                 color: c.accentColor,
                                 background: c.iconBg,
                                 padding: "6px 14px",
                                 borderRadius: "50px",
                              }}
                           >
                              {c.badge}
                           </span>
                        </div>

                        <h3
                           style={{
                              fontSize: "20px",
                              fontWeight: 700,
                              color: "#0f172a",
                              marginBottom: "14px",
                              lineHeight: 1.35,
                           }}
                        >
                           {c.title}
                        </h3>

                        <p
                           style={{
                              fontSize: "14px",
                              color: "#475569",
                              lineHeight: 1.65,
                              marginBottom: "24px",
                           }}
                        >
                           {c.description}
                        </p>

                        <div style={{ marginTop: "auto", borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
                           <ul className="list-unstyled mb-0" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              {c.pillars.map((p, idx) => (
                                 <li
                                    key={idx}
                                    style={{
                                       display: "flex",
                                       alignItems: "flex-start",
                                       gap: "10px",
                                       fontSize: "13px",
                                       color: "#334155",
                                       lineHeight: 1.45,
                                    }}
                                 >
                                    <span style={{ color: c.accentColor, flexShrink: 0, marginTop: "2px" }}>
                                       <CheckCircle2 size={16} />
                                    </span>
                                    <span>{p}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Bottom Value Row */}
            <div
               style={{
                  background: "linear-gradient(135deg, #0b1528 0%, #1e293b 100%)",
                  borderRadius: "20px",
                  padding: "30px 40px",
                  color: "#ffffff",
               }}
            >
               <div className="row g-4 align-items-center">
                  {statsHighlight.map((item, i) => (
                     <div key={i} className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center gap-3">
                           <div
                              style={{
                                 width: "48px",
                                 height: "48px",
                                 borderRadius: "12px",
                                 background: "rgba(255, 255, 255, 0.12)",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 color: "#38bdf8",
                                 flexShrink: 0,
                              }}
                           >
                              {item.icon}
                           </div>
                           <div>
                              <div style={{ fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "2px" }}>
                                 {item.title}
                              </div>
                              <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.4 }}>
                                 {item.desc}
                              </div>
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
