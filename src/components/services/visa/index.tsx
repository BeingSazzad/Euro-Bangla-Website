"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import { visaTypes } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const VisaPage = () => {
   const { locale, t } = useT();

   return (
      <ServicePageShell title="svc.visaTitle" subTitle="nav.visa">
         <div className="tg-listing-area ebt-page-content">
            <div className="container">
               <div className="tg-listing-section-title text-center mb-50">
                  <h5 className="tg-section-subtitle mb-15">{t("nav.visa")}</h5>
                  <h2 className="mb-15">{t("svc.visaTitle")}</h2>
                  <p className="mb-0">{t("svc.visaText")}</p>
               </div>

               <div className="row align-items-stretch">
                  {visaTypes.map((item) => {
                     const title = tx(item.title, locale);

                     return (
                        <div key={item.slug} className="col-lg-6 d-flex">
                           <Link href={`/visa/${item.slug}`} className="ebt-visa-type-card mb-30 w-100" aria-label={title}>
                              <span className="ebt-visa-type-media">
                                 <Image
                                    src={item.thumb}
                                    alt=""
                                    fill
                                    sizes="(max-width: 992px) 100vw, 50vw"
                                 />
                                 <span className="ebt-visa-type-badge">{title}</span>
                              </span>
                              <div className="ebt-visa-type-body">
                                 <h3 className="ebt-visa-type-title">{title}</h3>
                                 <p className="ebt-visa-type-text">{tx(item.summary, locale)}</p>
                                 <p className="ebt-visa-type-dest">
                                    <MapPin size={15} strokeWidth={1.75} aria-hidden="true" />
                                    <span>
                                       <strong>{t("svc.destinations")}:</strong> {tx(item.destinations, locale)}
                                    </span>
                                 </p>
                              </div>
                           </Link>
                        </div>
                     );
                  })}
               </div>

               <div className="row justify-content-center pt-30">
                  <div className="col-lg-8">
                     <h3 className="mb-20">{t("inquiry.title")}</h3>
                     <Suspense>
                        <InquiryForm defaultService="visa" />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default VisaPage;
