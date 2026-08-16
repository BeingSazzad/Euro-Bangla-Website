import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import PricingArea from "./PricingArea"
import FooterThree from "@/layouts/footers/FooterThree"
import Cta from "./Cta"

const Pricing = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb title="page.pricing" sub_title="page.pricing" />
        <PricingArea />
        <Cta />
      </main>
      <FooterThree />
    </>
  )
}

export default Pricing
