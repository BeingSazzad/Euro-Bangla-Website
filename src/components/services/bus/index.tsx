"use client";

import { Suspense } from "react";
import Link from "next/link";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import { busRoutes } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const BusPage = () => {
   const { locale, t } = useT();

   return (
      <ServicePageShell title="svc.busTitle" subTitle="nav.bus">
         <div className="tg-listing-area ebt-page-content">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="tg-listing-section-title mb-40">
                        <h5 className="tg-section-subtitle mb-15">{t("svc.popular")}</h5>
                        <h2 className="mb-15">{t("svc.busTitle")}</h2>
                        <p className="mb-0">{t("svc.busText")}</p>
                     </div>
                     <div className="row">
                        {busRoutes.map((route) => (
                           <div key={route.slug} className="col-md-6">
                              <div className="tg-listing-card-item mb-25 p-4">
                                 <span className="tg-section-subtitle d-block mb-10">
                                    {route.type === "domestic" ? t("svc.domestic") : t("svc.international")}
                                 </span>
                                 <h4 className="mb-10">
                                    {tx(route.from, locale)} → {tx(route.to, locale)}
                                 </h4>
                                 <p className="mb-10">
                                    {t("svc.duration")}: {tx(route.duration, locale)}
                                 </p>
                                 <p className="mb-20">
                                    {t("svc.from")} {route.fromPrice.toLocaleString()}
                                 </p>
                                 <Link
                                    className="tg-btn"
                                    href={`/inquiry?service=bus&from=${encodeURIComponent(tx(route.from, locale))}&to=${encodeURIComponent(tx(route.to, locale))}`}
                                 >
                                    {t("svc.quote")}
                                 </Link>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <h3 className="mb-20">{t("inquiry.title")}</h3>
                     <Suspense>
                        <InquiryForm defaultService="bus" />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default BusPage;
