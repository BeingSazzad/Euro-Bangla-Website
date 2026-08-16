"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import { findVisa } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const VisaDetailsPage = ({ slug }: { slug: string }) => {
   const { locale, t } = useT();
   const item = findVisa(slug);
   if (!item) notFound();

   return (
      <ServicePageShell title="svc.visaTitle" subTitle="nav.visa">
         <div className="tg-tour-about-area ebt-page-content">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7 mb-40">
                     <h2 className="mb-15">{tx(item.title, locale)}</h2>
                     <p className="mb-25">{tx(item.summary, locale)}</p>
                     <p className="mb-25">
                        <strong>{t("svc.destinations")}:</strong> {tx(item.destinations, locale)}
                     </p>
                     <h4 className="mb-15">{t("svc.documents")}</h4>
                     <ul className="mb-30">
                        {item.documents.map((doc, index) => (
                           <li key={index}>{tx(doc, locale)}</li>
                        ))}
                     </ul>
                     <h4 className="mb-10">{t("svc.processing")}</h4>
                     <p>{tx(item.processing, locale)}</p>
                  </div>
                  <div className="col-lg-5 mb-40">
                     <h3 className="mb-15">{t("inquiry.title")}</h3>
                     <Suspense>
                        <InquiryForm defaultService="visa" defaultDestination={tx(item.title, locale)} />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default VisaDetailsPage;
