"use client";

import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";

const ServicePageShell = ({
   title,
   subTitle,
   children,
}: {
   title: string;
   subTitle: string;
   children: React.ReactNode;
}) => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title={title} sub_title={subTitle} />
            {children}
         </main>
         <FooterThree />
      </>
   );
};

export default ServicePageShell;
