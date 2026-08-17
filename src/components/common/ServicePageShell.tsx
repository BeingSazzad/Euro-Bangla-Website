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
}: {
   title: string;
   subTitle: string;
   children: React.ReactNode;
   raw?: boolean;
   parentHref?: string;
   parentKey?: string;
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
            />
            {children}
         </main>
         <FooterThree />
      </>
   );
};

export default ServicePageShell;
