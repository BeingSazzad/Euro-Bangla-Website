"use client";

import { Suspense } from "react";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import { useT } from "@/i18n/LanguageProvider";

const InquiryPage = () => {
   const { t } = useT();
   return (
      <ServicePageShell title="inquiry.title" subTitle="nav.inquiry">
         <div className="tg-login-area ebt-page-content">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="tg-login-top text-center mb-40">
                        <h2 className="mb-15">{t("inquiry.title")}</h2>
                        <p className="mb-0">{t("inquiry.subtitle")}</p>
                     </div>
                     <Suspense>
                        <InquiryForm />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default InquiryPage;
