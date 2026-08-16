"use client";

import { COMPANY, whatsappLink } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

/** Brand mark kept (Lucide has no WhatsApp glyph). */
const WhatsAppGlyph = () => (
   <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.27-.02-.42.12-.56.13-.13.28-.33.42-.5.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.57.65.21 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32Z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.91L2 22l5.23-1.37A9.96 9.96 0 0 0 12.04 22C17.58 22 22 17.52 22 12S17.58 2 12.04 2Zm0 18.15c-1.58 0-3.05-.43-4.32-1.18l-.31-.18-3.1.81.83-3.02-.2-.33A8.1 8.1 0 0 1 3.9 12c0-4.48 3.66-8.12 8.14-8.12 4.48 0 8.12 3.64 8.12 8.12 0 4.48-3.64 8.15-8.12 8.15Z" />
   </svg>
);

const WhatsAppFloat = () => {
   const { t } = useT();

   return (
      <a
         className="ebt-whatsapp-float"
         href={whatsappLink(`Hello ${COMPANY.name}, I need travel help.`)}
         target="_blank"
         rel="noreferrer"
         aria-label={t("wa.label")}
      >
         <WhatsAppGlyph />
      </a>
   );
};

export default WhatsAppFloat;
