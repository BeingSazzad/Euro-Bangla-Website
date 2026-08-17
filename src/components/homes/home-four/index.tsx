import Hero from "./Hero"
import Destination from "./Destination"
import Listing from "./Listing"
import Process from "./Process"
import HomeReviews from "./HomeReviews"
import HomeFaq from "./HomeFaq"
import HomeBlog from "./HomeBlog"
import HeaderFour from "@/layouts/headers/HeaderFour"
import BannerFormFour from "@/components/common/banner-form/BannerFormFour"
import Cta from "./Cta"
import FooterThree from "@/layouts/footers/FooterThree"

/**
 * Live homepage composition for Euro Bangla Travels.
 */
const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Hero />
        <BannerFormFour />
        <Destination />
        <Listing />
        <Cta />
        <Process />
        <HomeReviews />
        <HomeFaq />
        <HomeBlog />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeFour
