"use client";

import { Suspense } from "react";
import InquiryForm from "../forms/InquiryForm";
import ContactInfoList from "@/components/common/ContactInfoList";
import { COMPANY } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

const ContactArea = () => {
   const { t } = useT();

   return (
      <div className="ebt-contact-page ebt-page-content">
         <div className="container">
            <div className="ebt-inq-split-card">
               <aside className="ebt-inq-aside">
                  <p className="ebt-inq-aside-kicker">{t("contact.info")}</p>
                  <h2>{t("contact.officeTitle")}</h2>
                  <p className="ebt-inq-aside-text">{t("contact.infoText")}</p>
                  <ContactInfoList showWhatsApp={false} />
                  <div className="ebt-contact-map">
                     <iframe
                        title={t("contact.mapTitle")}
                        src={COMPANY.mapEmbed}
                        width="600"
                        height="240"
                        style={{ border: "0" }}
                        loading="lazy"
                     />
                  </div>
               </aside>
               <div className="ebt-inq-card">
                  <div className="ebt-inq-card-head">
                     <h2>{t("contact.title")}</h2>
                     <p>{t("contact.text")}</p>
                  </div>
                  <Suspense>
                     <InquiryForm simple defaultService="other" />
                  </Suspense>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactArea;
