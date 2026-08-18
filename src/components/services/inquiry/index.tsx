"use client";

import { Suspense } from "react";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import ContactInfoList from "@/components/common/ContactInfoList";
import { useT } from "@/i18n/LanguageProvider";

const InquiryPage = () => {
   const { t } = useT();

   return (
      <ServicePageShell title="inquiry.title" subTitle="nav.inquiry">
         <div className="ebt-inq-page ebt-page-content">
            <div className="container">
               <div className="ebt-inq-split-card">
                  <aside className="ebt-inq-aside">
                     <p className="ebt-inq-aside-kicker">{t("inquiry.panelKicker")}</p>
                     <h2>{t("inquiry.panelTitle")}</h2>
                     <p className="ebt-inq-aside-text">{t("inquiry.panelText")}</p>
                     <ContactInfoList />
                  </aside>
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
      </ServicePageShell>
   );
};

export default InquiryPage;
