"use client";

import { Suspense } from "react";
import Link from "next/link";
import { BadgeCheck, Clock3, FileText, Info, Landmark, MapPin } from "lucide-react";
import type { VisaDestination } from "@/data/visaDestinations";
import { COMPANY } from "@/data/company";
import { iconProps } from "@/data/icons";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import VisaRequirementCopy from "./VisaRequirementCopy";

const VisaDestinationDetail = ({ dest }: { dest: VisaDestination }) => {
   const { locale, t } = useT();
   const name = tx(dest.name, locale);

   const facts = [
      { key: "type", icon: FileText, label: t("visaDetail.visaType"), value: tx(dest.visaType, locale) },
      { key: "time", icon: Clock3, label: t("visaDetail.processing"), value: tx(dest.processing, locale) },
      { key: "guide", icon: BadgeCheck, label: t("visaDetail.guidanceFee"), value: t("visaDetail.guidanceFeeValue") },
      { key: "fees", icon: Landmark, label: t("visaDetail.embassyFees"), value: t("visaDetail.embassyFeesValue") },
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
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <header className="ebt-visa-guide-head">
                        <h1 className="ebt-visa-guide-title">{name}</h1>
                        <p className="ebt-visa-guide-lead">{tx(dest.summary, locale)}</p>
                     </header>

                     <section className="ebt-visa-guide-block" aria-label={t("visaDetail.summary")}>
                        <div className="ebt-visa-facts">
                           {facts.map((fact) => {
                              const Icon = fact.icon;
                              return (
                                 <article key={fact.key} className="ebt-visa-fact">
                                    <span className="ebt-visa-fact-icon" aria-hidden="true">
                                       <Icon {...iconProps("sm")} />
                                    </span>
                                    <div>
                                       <p className="ebt-visa-fact-label">{fact.label}</p>
                                       <p className="ebt-visa-fact-value">{fact.value}</p>
                                    </div>
                                 </article>
                              );
                           })}
                        </div>
                     </section>

                     <p className="ebt-visa-office">
                        <MapPin {...iconProps("sm")} />
                        <span>
                           {t("visaDetail.submitInPerson")} {COMPANY.addressLine1}, {COMPANY.addressLine2}.{" "}
                           <Link href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</Link>
                        </span>
                     </p>

                     {dest.notes.length > 0 && (
                        <section className="ebt-visa-guide-block">
                           <div className="ebt-visa-notes-card">
                              <h2>
                                 <Info {...iconProps("sm")} />
                                 {t("visaDetail.importantNotes")}
                              </h2>
                              <ul>
                                 {dest.notes.map((line, index) => (
                                    <li key={index}>{tx(line, locale)}</li>
                                 ))}
                              </ul>
                           </div>
                        </section>
                     )}

                     <VisaRequirementCopy dest={dest} />
                  </div>

                  <div className="col-xl-4 col-lg-4">
                     <aside className="ebt-visa-assist">
                        <h2>{t("visaDetail.requestAssist")}</h2>
                        <Suspense>
                           <InquiryForm
                              compact
                              locked
                              hideIntro
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
