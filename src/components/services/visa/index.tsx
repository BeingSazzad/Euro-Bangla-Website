"use client";

import ServicePageShell from "@/components/common/ServicePageShell";
import { useT } from "@/i18n/LanguageProvider";
import { VisaCountryGrid, VisaCta, VisaWhy } from "./VisaSections";

const VisaPage = () => {
   const { t } = useT();

   return (
      <ServicePageShell title="svc.visaTitle" subTitle="nav.visa">
         <section className="ebt-visa-dest ebt-page-content">
            <div className="container">
               <div className="ebt-visa-dest-head text-center mb-50">
                  <h5 className="tg-section-subtitle mb-15">{t("nav.visa")}</h5>
                  <h2 className="ebt-visa-dest-title mb-12">{t("visaDetail.packagesTitle")}</h2>
                  <p className="ebt-visa-dest-text mb-0">{t("svc.visaText")}</p>
               </div>
               <VisaCountryGrid />
            </div>
         </section>
         <VisaWhy />
         <VisaCta />
      </ServicePageShell>
   );
};

export default VisaPage;
