"use client"
import { JSX } from "react"
import { Plane, Users, MapPin, ThumbsUp, Briefcase } from "lucide-react"
import { iconProps } from "@/data/icons"
import { useT } from "@/i18n/LanguageProvider"
import Count from "@/components/common/Count"

interface StatItem {
   icon: JSX.Element;
   numKey: string;
   suffix: string;
   labelKey: string;
}

const sIcon = iconProps("lg");

const stats: StatItem[] = [
   { icon: <Plane {...sIcon} />, numKey: "about.statYearsNum", suffix: "+", labelKey: "about.statYearsLabel" },
   { icon: <Users {...sIcon} />, numKey: "about.statTravelersNum", suffix: "K+", labelKey: "about.statTravelersLabel" },
   { icon: <MapPin {...sIcon} />, numKey: "about.statDestNum", suffix: "+", labelKey: "about.statDestLabel" },
   { icon: <ThumbsUp {...sIcon} />, numKey: "about.statSatNum", suffix: "%", labelKey: "about.statSatLabel" },
   { icon: <Briefcase {...sIcon} />, numKey: "about.statServicesNum", suffix: "+", labelKey: "about.statServicesLabel" },
];

const AboutStats = () => {
   const { t } = useT();

   return (
      <section className="ebt-about-stats ebt-section">
         <div className="container">
            <div className="text-center mb-45">
               <h5 className="tg-section-subtitle mb-15">{t("about.statsKicker")}</h5>
               <h2 className="ebt-about-stats-title">{t("about.statsTitle")}</h2>
            </div>

            <div className="ebt-about-stats-grid">
               {stats.map((s, i) => (
                  <div key={i} className="ebt-about-stats-card">
                     <div className="ebt-about-stats-icon">{s.icon}</div>
                     <div className="ebt-about-stats-number">
                        <Count number={parseInt(t(s.numKey)) || 10} />
                        {s.suffix}
                     </div>
                     <div className="ebt-about-stats-label">{t(s.labelKey)}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default AboutStats
