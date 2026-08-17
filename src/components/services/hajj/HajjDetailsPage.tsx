"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/common/ServicePageShell";
import PackageDetail from "@/components/common/PackageDetail";
import { findHajj } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const HajjDetailsPage = ({ slug }: { slug: string }) => {
   const { t, locale } = useT();
   const item = findHajj(slug);
   if (!item) notFound();

   return (
      <ServicePageShell
         title={tx(item.title, locale)}
         subTitle={tx(item.title, locale)}
         raw
         parentHref="/hajj-umrah"
         parentKey="nav.hajj"
      >
         <Suspense>
            <PackageDetail item={item} service="hajj" priceSuffix={` BDT ${t("svc.perPerson")}`} />
         </Suspense>
      </ServicePageShell>
   );
};

export default HajjDetailsPage;
