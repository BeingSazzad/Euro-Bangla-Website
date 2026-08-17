"use client";

import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";

const ServicePageShell = ({
   title,
   subTitle,
   children,
   raw = false,
   parentHref,
   parentKey,
   bannerSrc,
}: {
   title: string;
   subTitle: string;
   children: React.ReactNode;
   raw?: boolean;
   parentHref?: string;
   parentKey?: string;
   bannerSrc?: string;
}) => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb
               title={title}
               sub_title={subTitle}
               raw={raw}
               parentHref={parentHref}
               parentKey={parentKey}
               bannerSrc={bannerSrc}
            />
            {children}
         </main>
         <FooterThree />
      </>
   );
};

export default ServicePageShell;
