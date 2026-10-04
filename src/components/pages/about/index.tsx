import InnerHeader from "@/layouts/headers/InnerHeader"
import FooterThree from "@/layouts/footers/FooterThree"
import AboutHero from "./AboutHero"
import AboutOrigin from "./AboutOrigin"
import AboutAdvantage from "./AboutAdvantage"
import AboutTimeline from "./AboutTimeline"
import AboutStats from "./AboutStats"
import AboutMissionVision from "./AboutMissionVision"
import Cta from "./Cta"

const About = () => {
   return (
      <>
         <InnerHeader />
         <main className="ebt-about-main">
            <AboutHero />
            <AboutOrigin />
            <AboutAdvantage />
            <AboutTimeline />
            <AboutStats />
            <AboutMissionVision />
            <Cta />
         </main>
         <FooterThree />
      </>
   )
}

export default About

