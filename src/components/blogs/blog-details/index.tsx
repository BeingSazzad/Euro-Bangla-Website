import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import BlogDetailsArea from "./BlogDetailsArea"
import FooterFive from "@/layouts/footers/FooterFive"

const BlogDetails = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb title="page.blogDetails" sub_title="page.blogDetails" />
        <BlogDetailsArea />
      </main>
      <FooterFive />
    </>
  )
}

export default BlogDetails
