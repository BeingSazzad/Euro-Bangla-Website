"use client"

import { useT } from "@/i18n/LanguageProvider"

const Hero = () => {
   const { t } = useT();

   return (
      <div className="tg-hero-area tg-grey-bg">
         <div className="container-fluid container-1630">
            <div className="row">
               <div className="col-12">
                  <div className="tg-hero-2-content include-bg text-center" style={{ backgroundImage: `url(/assets/img/hero/hero-2/slider.jpg)` }}>
                     <h2 className="tg-hero-2-title mb-15">{t("home.hero")}</h2>
                     <p className="tg-hero-2-subtitle mb-0" style={{ color: "#fff", maxWidth: 520, margin: "0 auto", fontSize: "1.05rem" }}>
                        {t("home.heroText")}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
