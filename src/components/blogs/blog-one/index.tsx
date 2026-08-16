import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import BlogArea from "./BlogArea"
import FooterSix from "@/layouts/footers/FooterSix"

const BlogOne = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="page.blogs" sub_title="page.blog" />
            <BlogArea />
         </main>
         <FooterSix />
      </>
   )
}

export default BlogOne
