"use client";

import ServicePageShell from "@/components/common/ServicePageShell";
import PackageListing from "@/components/common/PackageListing";
import { tourPackages } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const ToursPage = () => {
   const { t } = useT();
   return (
      <ServicePageShell title="svc.toursTitle" subTitle="nav.tours">
         <PackageListing
            titleKey="svc.toursTitle"
            textKey="svc.toursText"
            items={tourPackages}
            hrefBase="/tours"
            priceSuffix={` BDT ${t("svc.perPerson")}`}
            showTourFilters
         />
      </ServicePageShell>
   );
};

export default ToursPage;
