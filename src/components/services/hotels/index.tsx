"use client";

import { Suspense } from "react";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageListing from "@/components/common/PackageListing";
import { hotelPackages } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const HotelsPage = () => {
   const { t } = useT();
   return (
      <ServicePageShell title="svc.hotelsTitle" subTitle="nav.hotels">
         <Suspense>
            <PackageListing
               titleKey="svc.hotelsTitle"
               textKey="svc.hotelsText"
               items={hotelPackages}
               hrefBase="/hotels"
               priceSuffix={` USD ${t("svc.perNight")}`}
               service="hotel"
            />
         </Suspense>
      </ServicePageShell>
   );
};

export default HotelsPage;
