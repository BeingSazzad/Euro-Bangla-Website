"use client"
import { JSX } from "react"
import { Award, Users, MapPin, ThumbsUp, Compass } from "lucide-react"
import { useT } from "@/i18n/LanguageProvider"
import Count from "@/components/common/Count"

interface StatItem {
   icon: JSX.Element;
   num: number;
   suffix: string;
   label: string;
   caption: string;
}

const stats: StatItem[] = [
   {
      icon: <Award size={26} />,
      num: 12,
      suffix: "+",
      label: "Years in Paris",
      caption: "Established 2012 at Rue Louis Blanc",
   },
   {
      icon: <Users size={26} />,
      num: 15,
      suffix: "K+",
      label: "Happy Travelers",
      caption: "Pilgrims, families & holiday makers",
   },
   {
      icon: <MapPin size={26} />,
      num: 50,
      suffix: "+",
      label: "Global Routes",
      caption: "Europe, Bangladesh, Gulf & USA",
   },
   {
      icon: <ThumbsUp size={26} />,
      num: 99,
      suffix: "%",
      label: "Satisfaction Rate",
      caption: "Consistent 5-star verified reviews",
   },
   {
      icon: <Compass size={26} />,
      num: 100,
      suffix: "%",
      label: "Verified Bookings",
      caption: "Official airline & hotel allotments",
   },
];

const AboutStats = () => {
   const { t } = useT();

   return (
      <section className="ebt-about-stats">
         <div className="container">
            <div className="ebt-stats-banner">
               <div className="row justify-content-center text-center mb-45">
                  <div className="col-xl-8 col-lg-9">
                     <span className="ebt-stats-kicker">MEASURABLE TRUST</span>
                     <h2 className="ebt-stats-title">
                        A Proven Track Record Across <span>Twelve Remarkable Years</span>
                     </h2>
                     <p className="ebt-stats-subtitle">
                        Every number represents a family safely united, a sacred pilgrimage fulfilled, and an adventure smoothly executed.
                     </p>
                  </div>
               </div>

               <div className="ebt-stats-cards-grid">
                  {stats.map((s, i) => (
                     <div key={i} className="ebt-stats-modern-card">
                        <div className="stat-card-icon">{s.icon}</div>
                        <div className="stat-card-number">
                           <Count number={s.num} />
                           <span className="stat-suffix">{s.suffix}</span>
                        </div>
                        <h5 className="stat-card-label">{s.label}</h5>
                        <p className="stat-card-caption">{s.caption}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutStats;
