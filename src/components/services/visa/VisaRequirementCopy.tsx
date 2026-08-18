"use client";

import { Download } from "lucide-react";
import type { VisaDestination } from "@/data/visaDestinations";
import { visaCopyFor } from "@/data/visaDestinations";
import { iconProps } from "@/data/icons";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import { downloadVisaChecklist } from "@/utils/visaChecklistDownload";

const VisaRequirementCopy = ({ dest }: { dest: VisaDestination }) => {
   const { locale, t } = useT();
   const blocks = visaCopyFor(dest);

   if (blocks.length === 0) return null;

   return (
      <section className="ebt-visa-guide-block ebt-visa-copy">
         <h2>{t("visaDetail.docsNeeded")}</h2>
         {blocks.map((block, index) => {
            if (block.type === "heading") {
               return <h3 key={index}>{tx(block.text, locale)}</h3>;
            }
            if (block.type === "paragraph") {
               return <p key={index}>{tx(block.text, locale)}</p>;
            }
            const ListTag = block.style === "number" ? "ol" : "ul";
            return (
               <ListTag key={index}>
                  {block.items.map((item, itemIndex) => (
                     <li key={itemIndex}>{tx(item, locale)}</li>
                  ))}
               </ListTag>
            );
         })}
         <p className="ebt-visa-docs-nb">{t("visaDetail.docsNb")}</p>
         <button
            type="button"
            className="ebt-visa-download-btn"
            onClick={() =>
               downloadVisaChecklist({
                  dest,
                  locale,
                  disclaimer: `${t("visaDetail.downloadFoot")} ${t("visaDetail.docsNb")}`,
               })
            }
         >
            <Download {...iconProps("sm")} />
            {t("visaDetail.downloadBtn")}
         </button>
      </section>
   );
};

export default VisaRequirementCopy;
