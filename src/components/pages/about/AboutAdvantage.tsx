"use client"
import Link from "next/link"
import { Building2, HeartHandshake, Plane, Headset, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { COMPANY } from "@/data/company"

const AboutAdvantage = () => {
   const advantages = [
      {
         icon: <Building2 size={26} />,
         tag: "PARIS HEADQUARTERS",
         title: "Walk-In Office in Paris",
         desc: `Located at 65 Rue Louis Blanc, 75010 Paris. Drop by anytime for face-to-face consultation, visa file reviews, and bespoke flight planning with our experienced travel team.`,
         linkText: "Get Office Directions",
         href: COMPANY.mapLink,
         accent: "#0047ab",
         bgBadge: "rgba(0, 71, 171, 0.08)",
      },
      {
         icon: <HeartHandshake size={26} />,
         tag: "SACRED PILGRIMAGE",
         title: "Dedicated Hajj & Umrah Care",
         desc: `Specialized pilgrim support with experienced Mutawwif leadership, premium hotels near the Holy Mosques in Makkah & Madinah, and visa handling with utmost religious sanctity.`,
         linkText: "View Pilgrimage Packages",
         href: "/hajj-umrah",
         accent: "#d97706",
         bgBadge: "rgba(217, 119, 6, 0.1)",
      },
      {
         icon: <Plane size={26} />,
         tag: "GLOBAL CARRIERS",
         title: "Verified Air Ticketing",
         desc: `Official direct GDS airline ticketing with top international carriers connecting Europe, Bangladesh, Middle East, UK, and North America at fully transparent, itemized rates.`,
         linkText: "Inquire Flight Quotes",
         href: "/flights",
         accent: "#0284c7",
         bgBadge: "rgba(2, 132, 199, 0.08)",
      },
      {
         icon: <Headset size={26} />,
         tag: "24/7 MULTILINGUAL",
         title: "Always by Your Side",
         desc: `Native language consultation in Bengali, French, English, and Urdu. From passport verification to emergency travel changes abroad, our helpline is always awake.`,
         linkText: "Contact Support",
         href: "/contact",
         accent: "#059669",
         bgBadge: "rgba(5, 150, 105, 0.08)",
      },
   ];

   return (
      <section className="ebt-about-advantage">
         <div className="container">
            {/* Header */}
            <div className="row justify-content-center text-center mb-50">
               <div className="col-xl-8 col-lg-9">
                  <span className="tg-section-subtitle mb-15">THE EURO BANGLA STANDARD</span>
                  <h2 className="ebt-advantage-title">
                     Why Thousands of Travelers <span>Choose Us Every Year</span>
                  </h2>
                  <p className="ebt-advantage-lead">
                     We combine the dependability of an established French licensed agency with the warmth and cultural understanding of your own community.
                  </p>
               </div>
            </div>

            {/* Bento Grid 4 Cards */}
            <div className="row g-4">
               {advantages.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                     <div className="ebt-advantage-card h-100">
                        <div className="d-flex align-items-center justify-content-between mb-25">
                           <div
                              className="advantage-icon-box"
                              style={{ background: item.bgBadge, color: item.accent }}
                           >
                              {item.icon}
                           </div>
                           <span
                              className="advantage-tag"
                              style={{ color: item.accent, background: item.bgBadge }}
                           >
                              {item.tag}
                           </span>
                        </div>

                        <h3 className="advantage-heading">{item.title}</h3>
                        <p className="advantage-desc">{item.desc}</p>

                        <div className="advantage-footer mt-auto pt-20">
                           <Link
                              href={item.href}
                              className="advantage-link"
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                           >
                              <span>{item.linkText}</span>
                              <ArrowUpRight size={16} />
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AboutAdvantage;
