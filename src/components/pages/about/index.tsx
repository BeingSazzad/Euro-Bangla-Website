import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import InnerHeader from "@/layouts/headers/InnerHeader"
import AboutArea from "./AboutArea"
import Choose from "./Choose"
import Cta from "./Cta"

const About = () => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title="page.about" sub_title="page.about" />
            <AboutArea />
            <Choose />
            <Cta />
         </main>
         <FooterThree />
      </>
   )
}

export default About
