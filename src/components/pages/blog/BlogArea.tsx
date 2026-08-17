"use client";

import BlogCard from "@/components/common/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { useT } from "@/i18n/LanguageProvider";

const BlogArea = () => {
   const { t } = useT();

   return (
      <section className="ebt-home-blog ebt-page-content">
         <div className="container">
            <div className="text-center mb-45">
               <p className="ebt-home-block-text mb-0">{t("home.blogPageText")}</p>
            </div>
            <div className="row">
               {blogPosts.map((post) => (
                  <div key={post.id} className="col-xl-4 col-md-6 mb-30">
                     <BlogCard post={post} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default BlogArea;
