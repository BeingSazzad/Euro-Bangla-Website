"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageDetail from "@/components/common/PackageDetail";
import { findTour } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const TourDetailsPage = ({ slug }: { slug: string }) => {
   const { t } = useT();
   const item = findTour(slug);
   if (!item) notFound();

   return (
      <ServicePageShell title="svc.toursTitle" subTitle="nav.tours">
         <Suspense>
            <PackageDetail item={item} service="tour" priceSuffix={` BDT ${t("svc.perPerson")}`} />
         </Suspense>
      </ServicePageShell>
   );
};

export default TourDetailsPage;
