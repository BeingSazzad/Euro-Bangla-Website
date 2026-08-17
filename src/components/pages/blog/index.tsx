import BreadCrumb from "@/components/common/BreadCrumb";
import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BlogArea from "./BlogArea";

const BlogPage = () => {
   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title="page.blogs" sub_title="page.blog" />
            <BlogArea />
         </main>
         <FooterThree />
      </>
   );
};

export default BlogPage;
