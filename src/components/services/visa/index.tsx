"use client";

import { Suspense } from "react";
import Link from "next/link";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import { visaTypes } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const VisaPage = () => {
   const { locale, t } = useT();

   return (
      <ServicePageShell title="svc.visaTitle" subTitle="nav.visa">
         <div className="tg-listing-area ebt-page-content">
            <div className="container">
               <div className="tg-listing-section-title text-center mb-50">
                  <h5 className="tg-section-subtitle mb-15">{t("nav.visa")}</h5>
                  <h2 className="mb-15">{t("svc.visaTitle")}</h2>
                  <p className="mb-0">{t("svc.visaText")}</p>
               </div>
               <div className="row">
                  {visaTypes.map((item) => (
                     <div key={item.slug} className="col-lg-6">
                        <div className="tg-listing-card-item mb-25 p-4">
                           <h4 className="mb-15">{tx(item.title, locale)}</h4>
                           <p>{tx(item.summary, locale)}</p>
                           <p>
                              <strong>{t("svc.destinations")}:</strong> {tx(item.destinations, locale)}
                           </p>
                           <Link className="tg-btn" href={`/visa/${item.slug}`}>
                              {t("svc.details")}
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="row justify-content-center pt-30">
                  <div className="col-lg-8">
                     <h3 className="mb-20">{t("inquiry.title")}</h3>
                     <Suspense>
                        <InquiryForm defaultService="visa" />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default VisaPage;
