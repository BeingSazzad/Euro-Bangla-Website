"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageDetail from "@/components/common/PackageDetail";
import { findTour } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const TourDetailsPage = ({ slug }: { slug: string }) => {
   const { t, locale } = useT();
   const item = findTour(slug);
   if (!item) notFound();

   return (
      <ServicePageShell
         title={tx(item.title, locale)}
         subTitle={tx(item.title, locale)}
         raw
         parentHref="/tours"
         parentKey="nav.tours"
      >
         <Suspense>
            <PackageDetail item={item} service="tour" priceSuffix={` BDT ${t("svc.perPerson")}`} />
         </Suspense>
      </ServicePageShell>
   );
};

export default TourDetailsPage;
