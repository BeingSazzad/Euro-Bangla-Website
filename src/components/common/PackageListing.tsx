"use client";

import type { PackageItem } from "@/data/services";
import PackageCard from "./PackageCard";
import { useT } from "@/i18n/LanguageProvider";

const PackageListing = ({
   titleKey,
   textKey,
   items,
   hrefBase,
   priceSuffix,
}: {
   titleKey: string;
   textKey: string;
   items: PackageItem[];
   hrefBase: string;
   priceSuffix: string;
}) => {
   const { t } = useT();

   return (
      <div className="tg-listing-area ebt-page-content">
         <div className="container">
            <div className="tg-listing-section-title mb-40">
               <h5 className="tg-section-subtitle mb-15">{t("home.destSubtitle")}</h5>
               <h2 className="mb-15">{t(titleKey)}</h2>
               <p className="mb-0">{t(textKey)}</p>
            </div>
            <div className="row align-items-stretch">
               {items.map((item) => (
                  <div key={item.slug} className="col-xl-4 col-md-6 d-flex">
                     <PackageCard item={item} href={`${hrefBase}/${item.slug}`} priceSuffix={priceSuffix} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default PackageListing;
