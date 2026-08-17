"use client";

import ServicePageShell from "@/components/common/ServicePageShell";
import PackageListing from "@/components/common/PackageListing";
import { hajjPackages } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const HajjPage = () => {
   const { t } = useT();
   return (
      <ServicePageShell title="svc.hajjTitle" subTitle="nav.hajj">
         <PackageListing
            titleKey="svc.hajjTitle"
            textKey="svc.hajjText"
            items={hajjPackages}
            hrefBase="/hajj-umrah"
            priceSuffix={` BDT ${t("svc.perPerson")}`}
         />
      </ServicePageShell>
   );
};

export default HajjPage;
