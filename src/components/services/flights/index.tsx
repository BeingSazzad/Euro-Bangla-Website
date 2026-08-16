"use client";

import { Suspense } from "react";
import ServicePageShell from "@/components/common/ServicePageShell";
import BannerFormFour from "@/components/common/banner-form/BannerFormFour";
import InquiryForm from "@/components/forms/InquiryForm";
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
         <BannerFormFour />
         <div className="tg-contact-area ebt-page-content">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <h3 className="mb-20">{t("inquiry.title")}</h3>
                     <p className="mb-30">{t("inquiry.subtitle")}</p>
                     <Suspense>
                        <InquiryForm defaultService="flight" />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default FlightsPage;
