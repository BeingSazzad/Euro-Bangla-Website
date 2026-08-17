import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import ErrorArea from "@/components/pages/error/ErrorArea";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Page not found | Euro Bangla Travels",
};

const NotFound = () => {
   return (
      <Wrapper>
         <InnerHeader />
         <main>
            <BreadCrumb title="page.error" sub_title="page.errorShort" />
            <ErrorArea />
         </main>
         <FooterThree />
      </Wrapper>
   );
};

export default NotFound;
