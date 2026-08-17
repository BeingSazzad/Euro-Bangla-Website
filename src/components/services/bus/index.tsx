"use client";

import ServicePageShell from "@/components/common/ServicePageShell";
import { EbtButtonLink } from "@/components/common/EbtButton";
import { busRoutes } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const BusPage = () => {
   const { locale, t } = useT();

   return (
      <ServicePageShell title="svc.busTitle" subTitle="nav.bus">
         <div className="tg-listing-area ebt-page-content">
            <div className="container">
               <div className="tg-listing-section-title mb-40">
                  <h5 className="tg-section-subtitle mb-15">{t("svc.popular")}</h5>
                  <h2 className="mb-15">{t("svc.busTitle")}</h2>
                  <p className="mb-0">{t("svc.busText")}</p>
               </div>
               <div className="row">
                  {busRoutes.map((route) => (
                     <div key={route.slug} className="col-xl-4 col-md-6 d-flex">
                        <div className="ebt-card ebt-route-card mb-25">
                           <div className="ebt-card-body">
                              <span className="ebt-route-card-kind">
                                 {route.type === "domestic" ? t("svc.domestic") : t("svc.international")}
                              </span>
                              <h3 className="ebt-route-card-title">
                                 {tx(route.from, locale)} → {tx(route.to, locale)}
                              </h3>
                              <p className="ebt-route-card-meta">
                                 {t("svc.duration")}: {tx(route.duration, locale)}
                              </p>
                              <p className="ebt-route-card-price">
                                 {t("svc.from")} <strong>BDT {route.fromPrice.toLocaleString("en-US")}</strong>
                              </p>
                              <EbtButtonLink
                                 variant="primary"
                                 className="ebt-route-card-cta"
                                 href={`/inquiry?service=bus&from=${encodeURIComponent(tx(route.from, locale))}&to=${encodeURIComponent(tx(route.to, locale))}`}
                              >
                                 {t("svc.quote")}
                              </EbtButtonLink>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default BusPage;
