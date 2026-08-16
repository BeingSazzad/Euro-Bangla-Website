"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageDetail from "@/components/common/PackageDetail";
import { findHotel } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const HotelDetailsPage = ({ slug }: { slug: string }) => {
   const { t } = useT();
   const item = findHotel(slug);
   if (!item) notFound();

   return (
      <ServicePageShell title="svc.hotelsTitle" subTitle="nav.hotels">
         <Suspense>
            <PackageDetail item={item} service="hotel" priceSuffix={` USD ${t("svc.perNight")}`} />
         </Suspense>
      </ServicePageShell>
   );
};

export default HotelDetailsPage;
