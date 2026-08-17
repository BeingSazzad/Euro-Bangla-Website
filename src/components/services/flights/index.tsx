"use client";

import ServicePageShell from "@/components/common/ServicePageShell";
import BannerFormFour from "@/components/common/banner-form/BannerFormFour";
import { useT } from "@/i18n/LanguageProvider";

const FlightsPage = () => {
   const { t } = useT();
   return (
      <ServicePageShell title="svc.flightsTitle" subTitle="nav.flights">
         <div className="ebt-section-sm pb-0">
            <div className="container">
               <div className="tg-listing-section-title text-center mb-40">
                  <h5 className="tg-section-subtitle mb-15">{t("nav.flights")}</h5>
                  <h2 className="mb-15">{t("svc.flightsTitle")}</h2>
                  <p className="mb-0">{t("svc.flightsText")}</p>
               </div>
            </div>
         </div>
         <BannerFormFour standalone />
      </ServicePageShell>
   );
};

export default FlightsPage;
