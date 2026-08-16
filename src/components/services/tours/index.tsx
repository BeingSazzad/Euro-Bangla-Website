"use client";

import { Suspense } from "react";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageListing from "@/components/common/PackageListing";
import { tourPackages } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const ToursPage = () => {
   const { t } = useT();
   return (
      <ServicePageShell title="svc.toursTitle" subTitle="nav.tours">
         <Suspense>
            <PackageListing
               titleKey="svc.toursTitle"
               textKey="svc.toursText"
               items={tourPackages}
               hrefBase="/tours"
               priceSuffix={` BDT ${t("svc.perPerson")}`}
               service="tour"
               showTourFilters
            />
         </Suspense>
      </ServicePageShell>
   );
};

export default ToursPage;
