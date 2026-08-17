"use client";

import { Suspense } from "react";
import Link from "next/link";
import type { VisaDestination } from "@/data/visaDestinations";
import { visaDocGroups, visaDocItemsFor } from "@/data/visaDestinations";
import { COMPANY } from "@/data/company";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";

const VisaDestinationDetail = ({ dest }: { dest: VisaDestination }) => {
   const { locale, t } = useT();
   const name = tx(dest.name, locale);

   const summaryRows = [
      { label: t("visaDetail.visaType"), value: tx(dest.visaType, locale) },
      { label: t("visaDetail.processing"), value: tx(dest.processing, locale) },
      { label: t("visaDetail.guidanceFee"), value: t("visaDetail.guidanceFeeValue") },
      { label: t("visaDetail.embassyFees"), value: t("visaDetail.embassyFeesValue") },
   ];

   return (
      <ServicePageShell
         title={name}
         subTitle={name}
         raw
         parentHref="/visa"
         parentKey="nav.visa"
         bannerSrc={dest.image.src}
      >
         <div className="ebt-visa-guide">
            <div className="container">
               <h1 className="ebt-visa-guide-title">{name}</h1>
               <p className="ebt-visa-guide-lead">{tx(dest.summary, locale)}</p>

               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <section className="ebt-visa-guide-block">
                        <h2>{t("visaDetail.summary")}</h2>
                        <dl className="ebt-visa-summary">
                           {summaryRows.map((row) => (
                              <div key={row.label} className="ebt-visa-summary-row">
                                 <dt>{row.label}</dt>
                                 <dd>{row.value}</dd>
                              </div>
                           ))}
                        </dl>
                        <p className="ebt-visa-office">
                           {t("visaDetail.submitInPerson")} {COMPANY.addressLine1}, {COMPANY.addressLine2}.{" "}
                           <Link href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</Link>
                        </p>
                     </section>

                     <section className="ebt-visa-guide-block">
                        <h2>{t("visaDetail.importantNotes")}</h2>
                        <ul className="ebt-visa-notes">
                           {dest.notes.map((line, index) => (
                              <li key={index}>{tx(line, locale)}</li>
                           ))}
                        </ul>
                     </section>

                     <section className="ebt-visa-guide-block">
                        <h2>{t("visaDetail.docsNeeded")}</h2>
                        {visaDocGroups.map((group) => (
                           <div key={group.id} className="ebt-visa-docs">
                              <h3>{t(group.titleKey)}</h3>
                              <ol>
                                 {visaDocItemsFor(dest, group.id).map((item, index) => (
                                    <li key={index}>{tx(item, locale)}</li>
                                 ))}
                              </ol>
                           </div>
                        ))}
                        <p className="ebt-visa-docs-nb">{t("visaDetail.docsNb")}</p>
                     </section>
                  </div>

                  <div className="col-xl-4 col-lg-4">
                     <aside className="ebt-visa-assist">
                        <h2>{t("visaDetail.requestAssist")}</h2>
                        <Suspense>
                           <InquiryForm
                              compact
                              locked
                              hideIntro
                              hideMessage
                              hint={t("visaDetail.assistHint")}
                              defaultService="visa"
                              defaultDestination={name}
                           />
                        </Suspense>
                     </aside>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default VisaDestinationDetail;
