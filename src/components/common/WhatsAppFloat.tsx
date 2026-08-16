"use client";

import { COMPANY, whatsappLink } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

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
         <i className="fa-brands fa-whatsapp"></i>
      </a>
   );
};

export default WhatsAppFloat;
