"use client"
import Image from "next/image";
import { JSX } from "react";
import { CalendarDays, Users, Award } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

import shape from "@/assets/img/banner/banner-2/shape.png"

interface DataType {
   id: number;
   icon: JSX.Element;
   title: string;
   desc: string;
}

const chooseIcon = { size: 40, strokeWidth: 1.5, "aria-hidden": true as const };

const choose_data: DataType[] = [
   {
      id: 1,
      icon: <CalendarDays {...chooseIcon} />,
      title: "about.flex",
      desc: "about.flexDesc",
   },
   {
      id: 2,
      icon: <Users {...chooseIcon} />,
      title: "about.exp",
      desc: "about.expDesc",
   },
   {
      id: 3,
      icon: <Award {...chooseIcon} />,
      title: "about.award",
      desc: "about.awardDesc",
   },
];

const Choose = () => {
   const { t } = useT();
   return (
      <div className="tg-chose-area tg-grey-bg ebt-section p-relative z-index-1">
         <Image className="tg-chose-6-shape d-none d-md-block" src={shape} alt="" />
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="tg-chose-section-title text-center mb-50">
                     <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">{t("about.whatWeDo")}</h5>
                     <h2 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">{t("about.arrange")}</h2>
                     <p className="text-capitalize wow fadeInUp mb-0" data-wow-delay=".5s" data-wow-duration=".9s">{t("about.arrangeText")}</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {choose_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="tg-chose-6-wrap mb-30">
                        <span className="icon mb-20">{item.icon}</span>
                        <h4 className="tg-chose-6-title mb-15">{t(item.title)}</h4>
                        <p>{t(item.desc)}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Choose
