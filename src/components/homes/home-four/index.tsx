import Hero from "./Hero"
import Destination from "./Destination"
import Process from "./Process"
import HeaderFour from "@/layouts/headers/HeaderFour"
import BannerFormFour from "@/components/common/banner-form/BannerFormFour"
import Cta from "./Cta"
import FooterThree from "@/layouts/footers/FooterThree"

/**
 * Live homepage composition for Euro Bangla Travels.
 * Listing (tour/holiday packages) kept in codebase but hidden from home UI.
 * Template sections Brand / Counter / Testimonial / Blog / App CTA
 * remain available for future use.
 */
const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Hero />
        <BannerFormFour />
        <Destination />
        <Cta />
        <Process />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeFour
