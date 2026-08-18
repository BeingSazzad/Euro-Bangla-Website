"use client";

import { Download } from "lucide-react";
import type { VisaDestination } from "@/data/visaDestinations";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";
import { downloadVisaChecklist, visaChecklistGroups } from "@/utils/visaChecklistDownload";

const VisaRequirementDownloads = ({ dest }: { dest: VisaDestination }) => {
   const { locale, t } = useT();
   const groups = visaChecklistGroups(dest, locale);
   const disclaimer = `${t("visaDetail.downloadFoot")} ${t("visaDetail.docsNb")}`;

   if (groups.length === 0) return null;

   return (
      <section className="ebt-visa-guide-block ebt-visa-downloads" aria-label={t("visaDetail.downloadTitle")}>
         <h2>{t("visaDetail.downloadTitle")}</h2>
         <p>{t("visaDetail.downloadText")}</p>
         <ul>
            <li>
               <span>{t("visaDetail.downloadAll")}</span>
               <button
                  type="button"
                  className="ebt-visa-download-btn"
                  onClick={() =>
                     downloadVisaChecklist({
                        dest,
                        locale,
                        groups,
                        filenameLabel: t("visaDetail.downloadAll"),
                        disclaimer,
                     })
                  }
               >
                  <Download {...iconProps("sm")} />
                  {t("visaDetail.downloadBtn")}
               </button>
            </li>
            {groups.map((group) => (
               <li key={group.id}>
                  <span>{group.title}</span>
                  <button
                     type="button"
                     className="ebt-visa-download-btn"
                     onClick={() =>
                        downloadVisaChecklist({
                           dest,
                           locale,
                           groups: [group],
                           filenameLabel: group.title,
                           disclaimer,
                        })
                     }
                  >
                     <Download {...iconProps("sm")} />
                     {t("visaDetail.downloadBtn")}
                  </button>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default VisaRequirementDownloads;
