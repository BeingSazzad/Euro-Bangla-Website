"use client";

import { notFound } from "next/navigation";
import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import { findVisa } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import { VisaCountryGrid, VisaCta, VisaWhy } from "./VisaSections";

const VisaDetailsPage = ({ slug }: { slug: string }) => {
   const { locale, t } = useT();
   const item = findVisa(slug);
   if (!item) notFound();

   const title = tx(item.title, locale);

   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title={title} sub_title={title} raw parentHref="/visa" parentKey="nav.visa" />

            <section className="ebt-visa-dest ebt-page-content">
               <div className="container">
                  <div className="ebt-visa-dest-head text-center mb-50">
                     <h2 className="ebt-visa-dest-title mb-12">{t("visaDetail.packagesTitle")}</h2>
                     <p className="ebt-visa-dest-text mb-0">{tx(item.summary, locale)}</p>
                  </div>

                  <VisaCountryGrid />

                  <div className="ebt-visa-docs mt-60">
                     <div className="row">
                        <div className="col-lg-6 mb-30">
                           <h3 className="mb-15">{t("svc.documents")}</h3>
                           <ul className="ebt-visa-doc-list">
                              {item.documents.map((doc, index) => (
                                 <li key={index}>{tx(doc, locale)}</li>
                              ))}
                           </ul>
                        </div>
                        <div className="col-lg-6 mb-30">
                           <h3 className="mb-15">{t("svc.processing")}</h3>
                           <p className="mb-20">{tx(item.processing, locale)}</p>
                           <p className="mb-0">
                              <strong>{t("svc.destinations")}:</strong> {tx(item.destinations, locale)}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <VisaWhy />
            <VisaCta destination={title} />
         </main>
         <FooterThree />
      </>
   );
};

export default VisaDetailsPage;
