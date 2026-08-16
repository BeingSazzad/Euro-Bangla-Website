import InnerHeader from "@/layouts/headers/InnerHeader"
import BreadCrumb from "../common/BreadCrumb"
import ContactArea from "./ContactArea"
import FooterThree from "@/layouts/footers/FooterThree"

const Contact = () => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title="page.contact" sub_title="page.contactShort" />
            <ContactArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Contact
