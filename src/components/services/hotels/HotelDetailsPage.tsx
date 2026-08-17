"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageDetail from "@/components/common/PackageDetail";
import { findHotel } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const HotelDetailsPage = ({ slug }: { slug: string }) => {
   const { t, locale } = useT();
   const item = findHotel(slug);
   if (!item) notFound();

   return (
      <ServicePageShell
         title={tx(item.title, locale)}
         subTitle={tx(item.title, locale)}
         raw
         parentHref="/hotels"
         parentKey="nav.hotels"
      >
         <Suspense>
            <PackageDetail item={item} service="hotel" priceSuffix={` USD ${t("svc.perNight")}`} />
         </Suspense>
      </ServicePageShell>
   );
};

export default HotelDetailsPage;
