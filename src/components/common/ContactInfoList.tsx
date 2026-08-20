"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, whatsappLink } from "@/data/company";
import { ICON_SIZE, iconProps } from "@/data/icons";
import { WhatsAppIcon } from "@/components/common/SocialIcons";
import { useT } from "@/i18n/LanguageProvider";

const ContactInfoList = ({ showWhatsApp = true }: { showWhatsApp?: boolean }) => {
   const { t } = useT();

   return (
      <ul className="ebt-contact-list">
         <li>
            <Link href={COMPANY.mapLink} target="_blank" rel="noopener noreferrer" className="ebt-contact-item">
               <span className="ebt-contact-icon" aria-hidden="true">
                  <MapPin {...iconProps("md")} />
               </span>
               <span className="ebt-contact-copy">
                  <strong>{t("header.officeAddress")}</strong>
                  <span>
                     {COMPANY.addressLine1}
                     <br />
                     {COMPANY.addressLine2}
                  </span>
               </span>
            </Link>
         </li>
         <li>
            <Link href={`tel:${COMPANY.phoneTel}`} className="ebt-contact-item">
               <span className="ebt-contact-icon" aria-hidden="true">
                  <Phone {...iconProps("md")} />
               </span>
               <span className="ebt-contact-copy">
                  <strong>{t("header.phoneNumber")}</strong>
                  <span>{COMPANY.phone}</span>
               </span>
            </Link>
         </li>
         {showWhatsApp && (
            <>
               <li>
                  <Link
                     href={whatsappLink(COMPANY.whatsapp1, "Hello Euro Bangla Travels, I have a tour or ticket inquiry.")}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="ebt-contact-item"
                  >
                     <span className="ebt-contact-icon ebt-contact-icon--wa" aria-hidden="true">
                        <WhatsAppIcon size={ICON_SIZE.md} />
                     </span>
                     <span className="ebt-contact-copy">
                        <strong>WhatsApp ({COMPANY.whatsapp1Label})</strong>
                        <span>{COMPANY.whatsapp1Display}</span>
                     </span>
                  </Link>
               </li>
               <li>
                  <Link
                     href={whatsappLink(COMPANY.whatsapp2, "Hello Euro Bangla Travels, I need customer support.")}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="ebt-contact-item"
                  >
                     <span className="ebt-contact-icon ebt-contact-icon--wa" aria-hidden="true">
                        <WhatsAppIcon size={ICON_SIZE.md} />
                     </span>
                     <span className="ebt-contact-copy">
                        <strong>WhatsApp ({COMPANY.whatsapp2Label})</strong>
                        <span>{COMPANY.whatsapp2Display}</span>
                     </span>
                  </Link>
               </li>
            </>
         )}
         <li>
            <Link href={`mailto:${COMPANY.email}`} className="ebt-contact-item">
               <span className="ebt-contact-icon" aria-hidden="true">
                  <Mail {...iconProps("md")} />
               </span>
               <span className="ebt-contact-copy">
                  <strong>{t("header.emailAddress")}</strong>
                  <span>{COMPANY.email}</span>
               </span>
            </Link>
         </li>
      </ul>
   );
};

export default ContactInfoList;
