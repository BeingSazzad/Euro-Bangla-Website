"use client";

import { Suspense, useMemo, useState } from "react";
import type { PackageItem } from "@/data/services";
import PackageCard from "./PackageCard";
import { useT } from "@/i18n/LanguageProvider";
import InquiryForm from "@/components/forms/InquiryForm";

const PackageListing = ({
   titleKey,
   textKey,
   items,
   hrefBase,
   priceSuffix,
   service,
   showTourFilters = false,
}: {
   titleKey: string;
   textKey: string;
   items: PackageItem[];
   hrefBase: string;
   priceSuffix: string;
   service: string;
   showTourFilters?: boolean;
}) => {
   const { t } = useT();
   const [category, setCategory] = useState("all");
   const [region, setRegion] = useState("all");

   const filtered = useMemo(() => {
      return items.filter((item) => {
         const catOk = category === "all" || item.category === category;
         const regionOk = region === "all" || item.region === region;
         return catOk && regionOk;
      });
   }, [items, category, region]);

   const Chip = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => (
      <button
         type="button"
         className={`tg-btn mb-10 mr-10 ${active ? "" : "tg-btn-transparent"}`}
         onClick={onClick}
         style={{ padding: "8px 16px", minHeight: 0 }}
      >
         {label}
      </button>
   );

   return (
      <div className="tg-listing-area ebt-page-content">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="tg-listing-section-title mb-40">
                     <h5 className="tg-section-subtitle mb-15">{t("home.destSubtitle")}</h5>
                     <h2 className="mb-15">{t(titleKey)}</h2>
                     <p className="mb-0">{t(textKey)}</p>
                  </div>
                  {showTourFilters && (
                     <div className="mb-40">
                        <p className="mb-15">{t("svc.filterType")}</p>
                        <Chip active={category === "all"} onClick={() => setCategory("all")} label={t("svc.all")} />
                        <Chip active={category === "family"} onClick={() => setCategory("family")} label={t("svc.family")} />
                        <Chip active={category === "honeymoon"} onClick={() => setCategory("honeymoon")} label={t("svc.honeymoon")} />
                        <Chip active={category === "group"} onClick={() => setCategory("group")} label={t("svc.group")} />
                        <p className="mb-15 mt-25">{t("svc.filterRegion")}</p>
                        <Chip active={region === "all"} onClick={() => setRegion("all")} label={t("svc.all")} />
                        <Chip active={region === "europe"} onClick={() => setRegion("europe")} label={t("svc.europe")} />
                        <Chip active={region === "dubai"} onClick={() => setRegion("dubai")} label={t("svc.dubai")} />
                        <Chip active={region === "turkey"} onClick={() => setRegion("turkey")} label={t("svc.turkey")} />
                        <Chip active={region === "ksa"} onClick={() => setRegion("ksa")} label={t("svc.ksa")} />
                     </div>
                  )}
                  <div className="row align-items-stretch">
                     {filtered.map((item) => (
                        <div key={item.slug} className="col-xl-6 col-md-6 d-flex">
                           <PackageCard item={item} href={`${hrefBase}/${item.slug}`} priceSuffix={priceSuffix} />
                        </div>
                     ))}
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="tg-contact-content-wrap">
                     <h3 className="mb-20">{t("inquiry.title")}</h3>
                     <Suspense>
                        <InquiryForm defaultService={service} />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PackageListing;
