"use client";

import { Suspense } from "react";
import Link from "next/link";
import InquiryForm from "../forms/InquiryForm";
import ContactInfoList from "@/components/common/ContactInfoList";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "@/components/common/SocialIcons";
import { COMPANY } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

const ContactArea = () => {
   const { t } = useT();

   return (
      <div className="ebt-contact-page ebt-page-content">
         <div className="container">
            <div className="ebt-inq-split-card">
               <aside className="ebt-inq-aside">
                  <h2>{t("contact.officeTitle")}</h2>
                  <p className="ebt-inq-aside-text">{t("contact.infoText")}</p>
                  <ContactInfoList showWhatsApp={true} />
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
