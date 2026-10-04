"use client"
import { Compass, Globe2, CheckCircle2, HeartHandshake, Sparkles, Award } from "lucide-react"

const AboutMissionVision = () => {
   const cards = [
      {
         badge: "OUR MISSION",
         icon: <Compass size={28} />,
         title: "Empowering Seamless Global Journeys",
         description: "To deliver transparent, reliable, and deeply attentive travel solutions. Whether embarking on a sacred pilgrimage or vacationing across continents, we eliminate the anxiety of travel with personalized care.",
         pillars: [
            "Transparent pricing with zero hidden booking fees",
            "Specialized Hajj & Umrah package management",
            "End-to-end flight, hotel, and visa documentation support",
         ],
         accentColor: "#0047ab",
         iconBg: "rgba(0, 71, 171, 0.08)",
         iconColor: "#0047ab",
         borderColor: "rgba(0, 71, 171, 0.16)",
      },
      {
         badge: "OUR VISION",
         icon: <Globe2 size={28} />,
         title: "Europe's Most Trusted Travel Companion",
         description: "To be universally recognized as the leading diaspora-rooted travel agency bridging Europe, Bangladesh, and the world — celebrated for ethical operations, customer advocacy, and premier travel hospitality.",
         pillars: [
            "Expanding direct international airline & hotel networks",
            "Setting the industry standard for spiritual pilgrimage care",
            "Fostering lifelong relationships built on mutual trust",
         ],
         accentColor: "#0047ab",
         iconBg: "rgba(0, 71, 171, 0.08)",
         iconColor: "#0047ab",
         borderColor: "rgba(0, 71, 171, 0.16)",
      },
   ];

   const statsHighlight = [
      { icon: <Award size={22} />, title: "12+ Years of Trust", desc: "Proudly serving the European and Bangladeshi community" },
      { icon: <HeartHandshake size={22} />, title: "100% Client Centric", desc: "Tailored itineraries aligned with your schedule & budget" },
      { icon: <Sparkles size={22} />, title: "Ethical & Transparent", desc: "No hidden charges, honest visa advice, confirmed bookings" },
   ];

   return (
      <section className="ebt-mission-vision">
         <div className="container">
            {/* Header */}
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 text-center">
                  <div className="mb-45">
                     <span className="tg-section-subtitle mb-15">PURPOSE & PROMISE</span>
                     <h2 className="ebt-mission-vision-title">
                        Driven by Purpose, <span>Guided by Trust</span>
                     </h2>
                     <p className="ebt-mission-vision-lead">
                        Since our inception in 2012, Euro Bangla Travels has been rooted in the belief that travel should be accessible, honest, and spiritually fulfilling.
                     </p>
                  </div>
               </div>
            </div>

            {/* Mission & Vision - 2 Balanced Columns */}
            <div className="row g-4 mb-40">
               {cards.map((c, i) => (
                  <div key={i} className="col-lg-6 col-md-6">
                     <div
                        className="ebt-mv-card h-100"
                        style={{
                           background: "#ffffff",
                           border: `1px solid ${c.borderColor}`,
                           borderRadius: "22px",
                           padding: "38px 32px",
                           boxShadow: "0 8px 24px rgba(0, 71, 171, 0.04)",
                           display: "flex",
                           flexDirection: "column",
                           transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
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
                                 padding: "6px 16px",
                                 borderRadius: "50px",
                                 border: "1px solid rgba(0, 71, 171, 0.15)",
                              }}
                           >
                              {c.badge}
                           </span>
                        </div>

                        <h3
                           style={{
                              fontSize: "22px",
                              fontWeight: 700,
                              color: "#0b1e48",
                              marginBottom: "14px",
                              lineHeight: 1.35,
                           }}
                        >
                           {c.title}
                        </h3>

                        <p
                           style={{
                              fontSize: "15px",
                              color: "#475569",
                              lineHeight: 1.7,
                              marginBottom: "24px",
                           }}
                        >
                           {c.description}
                        </p>

                        <div style={{ marginTop: "auto", borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
                           <ul className="list-unstyled mb-0" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                              {c.pillars.map((p, idx) => (
                                 <li
                                    key={idx}
                                    style={{
                                       display: "flex",
                                       alignItems: "flex-start",
                                       gap: "10px",
                                       fontSize: "14px",
                                       color: "#1e293b",
                                       lineHeight: 1.5,
                                    }}
                                 >
                                    <span style={{ color: "#0047ab", flexShrink: 0, marginTop: "2px" }}>
                                       <CheckCircle2 size={17} />
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

            {/* Bottom Highlight Strip - Light Mode with Website Primary Colors */}
            <div
               style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "20px",
                  padding: "26px 36px",
                  boxShadow: "0 6px 24px rgba(0, 71, 171, 0.04)",
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
                                 borderRadius: "14px",
                                 background: "rgba(0, 71, 171, 0.08)",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 color: "#0047ab",
                                 flexShrink: 0,
                              }}
                           >
                              {item.icon}
                           </div>
                           <div>
                              <div style={{ fontWeight: 700, fontSize: "15px", color: "#0b1e48", marginBottom: "3px" }}>
                                 {item.title}
                              </div>
                              <div style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.45 }}>
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

