"use client";

import { Suspense } from "react";
import Link from "next/link";
import InquiryForm from "../forms/InquiryForm";
import { COMPANY, whatsappLink } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

const ContactArea = () => {
   const { t } = useT();

   return (
      <div className="tg-contact-area ebt-page-content p-relative z-index-1">
         <div className="container">
            <div className="row align-items-start">
               <div className="col-lg-5">
                  <div className="tg-team-details-contant tg-contact-info-wrap mb-40">
                     <h6 className="mb-15">{t("contact.info")}</h6>
                     <p className="mb-25">{t("contact.infoText")}</p>
                     <div className="tg-team-details-contact-info mb-40">
                        <div className="tg-team-details-contact">
                           <div className="item">
                              <span>{t("contact.phone")}</span>
                              <Link href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</Link>
                           </div>
                           <div className="item">
                              <span>WhatsApp : </span>
                              <Link href={whatsappLink()} target="_blank">{COMPANY.phone}</Link>
                           </div>
                           <div className="item">
                              <span>{t("contact.email")}</span>
                              <Link href={`mailto:${COMPANY.email}`}>{COMPANY.email}</Link>
                           </div>
                           <div className="item">
                              <span>{t("contact.address")}</span>
                              <Link href={COMPANY.mapLink}>{COMPANY.address}</Link>
                           </div>
                        </div>
                     </div>
                     <div className="tg-contact-map h-100">
                        <iframe src={COMPANY.mapEmbed} width="600" height="450" style={{ border: "0" }} loading="lazy"></iframe>
                     </div>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="tg-contact-content-wrap mb-40">
                     <h3 className="tg-contact-title mb-15">{t("contact.title")}</h3>
                     <p className="mb-30">{t("contact.text")}</p>
                     <Suspense>
                        <InquiryForm simple defaultService="other" />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactArea;
