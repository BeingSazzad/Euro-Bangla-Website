import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import InnerHeader from "@/layouts/headers/InnerHeader"
import AboutOrigin from "./AboutOrigin"
import AboutTimeline from "./AboutTimeline"
import AboutStats from "./AboutStats"
import AboutGallery from "./AboutGallery"
import Cta from "./Cta"

const About = () => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title="page.about" sub_title="page.about" />
            <AboutOrigin />
            <AboutTimeline />
            <AboutStats />
            <AboutGallery />
            <Cta />
         </main>
         <FooterThree />
      </>
   )
}

export default About
