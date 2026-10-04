"use client";

import type { ReactNode } from "react";
import { Download, Briefcase, Building2, GraduationCap, Users, FileText, CheckCircle2 } from "lucide-react";
import type { VisaDestination } from "@/data/visaDestinations";
import { visaCopyFor } from "@/data/visaDestinations";
import { iconProps } from "@/data/icons";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import { downloadVisaChecklist } from "@/utils/visaChecklistDownload";

const getCategoryIcon = (titleStr: string) => {
   const lower = titleStr.toLowerCase();
   if (lower.includes("job") || lower.includes("চাকরি") || lower.includes("salarié")) return Briefcase;
   if (lower.includes("business") || lower.includes("ব্যবসা") || lower.includes("entreprise")) return Building2;
   if (lower.includes("student") || lower.includes("ছাত্র") || lower.includes("étudiant")) return GraduationCap;
   if (lower.includes("family") || lower.includes("পরিবার") || lower.includes("famille")) return Users;
   return FileText;
};

const VisaRequirementCopy = ({ dest }: { dest: VisaDestination }) => {
   const { locale, t } = useT();
   const blocks = visaCopyFor(dest);

   if (blocks.length === 0) return null;

   const renderedElements: ReactNode[] = [];
   for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      if (block.type === "heading") {
         const headingText = tx(block.text, locale);
         const nextBlock = blocks[i + 1];
         if (nextBlock && nextBlock.type === "list") {
            const Icon = getCategoryIcon(headingText);
            renderedElements.push(
               <div key={i} className="ebt-doc-group-card">
                  <div className="ebt-doc-group-header">
                     <span className="ebt-doc-group-icon">
                        <Icon size={18} />
                     </span>
                     <h3>{headingText}</h3>
                  </div>
                  <ul className="ebt-doc-list">
                     {nextBlock.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="ebt-doc-item">
                           <span className="ebt-doc-bullet">
                              <CheckCircle2 size={16} />
                           </span>
                           <span className="ebt-doc-text">{tx(item, locale)}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            );
            i++; // skip list as it's rendered inside card
            continue;
         } else {
            renderedElements.push(<h3 key={i}>{headingText}</h3>);
         }
      } else if (block.type === "paragraph") {
         renderedElements.push(<p key={i}>{tx(block.text, locale)}</p>);
      } else if (block.type === "list") {
         renderedElements.push(
            <ul key={i} className="ebt-doc-list mb-15">
               {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="ebt-doc-item">
                     <span className="ebt-doc-bullet">
                        <CheckCircle2 size={16} />
                     </span>
                     <span className="ebt-doc-text">{tx(item, locale)}</span>
                  </li>
               ))}
            </ul>
         );
      }
   }

   return (
      <section className="ebt-visa-guide-block ebt-visa-copy">
         <h2>{t("visaDetail.docsNeeded")}</h2>
         <div className="ebt-visa-docs-grid">
            {renderedElements}
         </div>
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
