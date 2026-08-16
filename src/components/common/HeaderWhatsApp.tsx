"use client";

import Link from "next/link";
import { COMPANY, whatsappLink } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

const WhatsAppIcon = () => (
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="18" fill="#25D366" />
      <path
         d="M18.01 8.4c-5.18 0-9.39 4.18-9.39 9.33 0 1.64.44 3.24 1.27 4.65L8.4 27.6l5.4-1.41a9.45 9.45 0 0 0 4.21.98c5.18 0 9.39-4.18 9.39-9.33S23.19 8.4 18.01 8.4Zm5.47 13.2c-.23.64-1.33 1.18-1.86 1.26-.48.07-1.09.1-1.76-.11-.41-.12-.93-.29-1.6-.57-2.82-1.22-4.65-4.05-4.79-4.24-.14-.19-1.14-1.51-1.14-2.88 0-1.37.72-2.04.97-2.32.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.23.55.79 1.9.86 2.04.07.14.11.3.02.49-.09.19-.14.3-.27.47-.14.16-.29.36-.41.49-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.28.14.44.12.6-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.7-.16 1.34Z"
         fill="#fff"
      />
   </svg>
);

const HeaderWhatsApp = ({ className = "" }: { className?: string }) => {
   const { t } = useT();

   return (
      <Link
         className={`tg-header-whatsapp ${className}`.trim()}
         href={whatsappLink(`Hello ${COMPANY.name}, I need travel help.`)}
         target="_blank"
         rel="noreferrer"
         aria-label={`${t("wa.label")} ${COMPANY.phone}`}
      >
         <span className="tg-header-whatsapp-icon">
            <WhatsAppIcon />
         </span>
         <span className="tg-header-whatsapp-text">
            <span className="tg-header-whatsapp-label">{t("wa.label")}</span>
            <span className="tg-header-whatsapp-number">{COMPANY.phone}</span>
         </span>
      </Link>
   );
};

export default HeaderWhatsApp;
