"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageDetail from "@/components/common/PackageDetail";
import { findHajj } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const HajjDetailsPage = ({ slug }: { slug: string }) => {
   const { t } = useT();
   const item = findHajj(slug);
   if (!item) notFound();

   return (
      <ServicePageShell title="svc.hajjTitle" subTitle="nav.hajj">
         <Suspense>
            <PackageDetail item={item} service="hajj" priceSuffix={` BDT ${t("svc.perPerson")}`} />
         </Suspense>
      </ServicePageShell>
   );
};

export default HajjDetailsPage;
