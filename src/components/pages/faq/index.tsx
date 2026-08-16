import BreadCrumb from "@/components/common/BreadCrumb"
import InnerHeader from "@/layouts/headers/InnerHeader"
import FaqArea from "./FaqArea"
import FooterThree from "@/layouts/footers/FooterThree"

const Faq = () => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title="page.faq" sub_title="page.faqShort" />
            <FaqArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Faq
