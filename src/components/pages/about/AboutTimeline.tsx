"use client"
import Image from "next/image"
import { JSX } from "react"
import { Rocket, Globe, Users, Landmark, Monitor, TrendingUp } from "lucide-react"
import { iconProps } from "@/data/icons"
import { useT } from "@/i18n/LanguageProvider"

interface Milestone {
   year: string;
   icon: JSX.Element;
   titleKey: string;
   descKey: string;
}

const tlIcon = iconProps("md");

const milestones: Milestone[] = [
   { year: "2012", icon: <Rocket {...tlIcon} />, titleKey: "about.tl2012Title", descKey: "about.tl2012Desc" },
   { year: "2015", icon: <Globe {...tlIcon} />, titleKey: "about.tl2015Title", descKey: "about.tl2015Desc" },
   { year: "2018", icon: <Users {...tlIcon} />, titleKey: "about.tl2018Title", descKey: "about.tl2018Desc" },
   { year: "2021", icon: <Landmark {...tlIcon} />, titleKey: "about.tl2021Title", descKey: "about.tl2021Desc" },
   { year: "2024", icon: <Monitor {...tlIcon} />, titleKey: "about.tl2024Title", descKey: "about.tl2024Desc" },
   { year: "Today", icon: <TrendingUp {...tlIcon} />, titleKey: "about.tlTodayTitle", descKey: "about.tlTodayDesc" },
];

const teamPhotos = [
   "/assets/img/about/about.jpg",
   "/assets/img/about/about-2.jpg",
   "/assets/img/about/about-3.jpg",
   "/assets/img/about/about-4.jpg",
   "/assets/img/about/details/thumb-1.jpg",
   "/assets/img/about/details/thumb-2.jpg",
];

const AboutTimeline = () => {
   const { t } = useT();

   return (
      <section className="ebt-about-timeline ebt-section">
         <div className="container">
            <div className="text-center mb-45">
               <h5 className="tg-section-subtitle mb-15">{t("about.timelineKicker")}</h5>
               <h2 className="ebt-about-timeline-title">Milestones of Trust & Growth</h2>
            </div>

            <div className="ebt-about-timeline-track">
               {milestones.map((m) => (
                  <div key={m.year} className="ebt-about-timeline-node">
                     <div className="ebt-about-timeline-icon">{m.icon}</div>
                     <div>
                        <div className="ebt-about-timeline-year">{m.year}</div>
                        <div className="ebt-about-timeline-node-title">{t(m.titleKey)}</div>
                        <p className="ebt-about-timeline-node-desc">{t(m.descKey)}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="ebt-about-timeline-photos">
               {teamPhotos.map((src, i) => (
                  <div key={i} className="ebt-about-timeline-photo">
                     <Image
                        src={src}
                        alt=""
                        width={240}
                        height={180}
                        sizes="(max-width: 768px) 50vw, 16vw"
                        style={{ width: "100%", height: "100%" }}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default AboutTimeline
