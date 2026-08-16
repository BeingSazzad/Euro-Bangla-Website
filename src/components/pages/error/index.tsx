import HeaderThree from "@/layouts/headers/HeaderThree"
import ErrorArea from "./ErrorArea"
import FooterFive from "@/layouts/footers/FooterFive"
import BreadCrumb from "@/components/common/BreadCrumb"

const NotFound = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb title="page.error" sub_title="page.errorShort" />
        <ErrorArea />
      </main>
      <FooterFive />
    </>
  )
}

export default NotFound
