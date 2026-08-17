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
                  <div className="col-lg-5 col-md-7">
                     <div className="ebt-inq-card">
                        <div className="ebt-inq-card-head">
                           <h2>{t("inquiry.formTitle")}</h2>
                           <p>{t("inquiry.subtitle")}</p>
                        </div>
                        <Suspense>
                           <InquiryForm />
                        </Suspense>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default InquiryPage;
