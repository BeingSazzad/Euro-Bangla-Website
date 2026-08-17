"use client";

import Link from "next/link";
import BlogCard from "@/components/common/BlogCard";
import Button from "@/components/common/Button";
import { homeBlogPosts } from "@/data/blogPosts";
import { useT } from "@/i18n/LanguageProvider";

const HomeBlog = () => {
   const { t } = useT();

   return (
      <section className="ebt-home-blog ebt-section">
         <div className="container">
            <div className="text-center mb-45">
               <h5 className="tg-section-subtitle mb-15">{t("home.blogSubtitle")}</h5>
               <h2 className="ebt-home-block-title mb-12">{t("home.blogTitle")}</h2>
               <p className="ebt-home-block-text mb-0">{t("home.blogText")}</p>
            </div>

            <div className="row">
               {homeBlogPosts.map((post) => (
                  <div key={post.id} className="col-xl-4 col-md-6 mb-30">
                     <BlogCard post={post} />
                  </div>
               ))}
            </div>

            <div className="text-center pt-10">
               <Link href="/blog" className="tg-btn tg-btn-switch-animation">
                  <Button text={t("home.blogViewAll")} />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default HomeBlog;
