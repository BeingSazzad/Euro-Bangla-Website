"use client";

import { Suspense } from "react";
import Link from "next/link";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import ContactInfoList from "@/components/common/ContactInfoList";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "@/components/common/SocialIcons";
import { COMPANY } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

const InquiryPage = () => {
   const { t } = useT();

   return (
      <ServicePageShell title="inquiry.title" subTitle="nav.inquiry">
         <div className="ebt-inq-page ebt-page-content">
            <div className="container">
               <div className="ebt-inq-split-card">
                  <aside className="ebt-inq-aside">
                     <h2>{t("inquiry.panelTitle")}</h2>
                     <p className="ebt-inq-aside-text">{t("inquiry.panelText")}</p>
                     <ContactInfoList />
                     <div className="ebt-contact-social">
                        <p className="ebt-contact-social-label">Follow us</p>
                        <div className="ebt-contact-social-icons">
                           <Link href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="ebt-contact-social-icon ebt-contact-social-icon--fb" aria-label="Facebook">
                              <FacebookIcon size={22} />
                           </Link>
                           <Link href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="ebt-contact-social-icon ebt-contact-social-icon--ig" aria-label="Instagram">
                              <InstagramIcon size={22} />
                           </Link>
                           <Link href={COMPANY.youtube} target="_blank" rel="noopener noreferrer" className="ebt-contact-social-icon ebt-contact-social-icon--yt" aria-label="YouTube">
                              <YoutubeIcon size={22} />
                           </Link>
                           <Link href={`https://wa.me/${COMPANY.whatsapp1}`} target="_blank" rel="noopener noreferrer" className="ebt-contact-social-icon ebt-contact-social-icon--wa" aria-label="WhatsApp">
                              <WhatsAppIcon size={22} />
                           </Link>
                        </div>
                     </div>
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
