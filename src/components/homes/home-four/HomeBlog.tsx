"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

import blog_1 from "@/assets/img/blog/blog-2/blog-1.jpg";
import blog_2 from "@/assets/img/blog/blog-2/blog-2.jpg";
import blog_3 from "@/assets/img/blog/blog-2/blog-3.jpg";

const posts = [
   {
      id: 1,
      thumb: blog_1,
      tagKey: "home.blog1Tag",
      titleKey: "home.blog1Title",
      textKey: "home.blog1Text",
      href: "/hajj-umrah",
      dateKey: "home.blog1Date",
      readKey: "home.blog1Read",
   },
   {
      id: 2,
      thumb: blog_2,
      tagKey: "home.blog2Tag",
      titleKey: "home.blog2Title",
      textKey: "home.blog2Text",
      href: "/visa",
      dateKey: "home.blog2Date",
      readKey: "home.blog2Read",
   },
   {
      id: 3,
      thumb: blog_3,
      tagKey: "home.blog3Tag",
      titleKey: "home.blog3Title",
      textKey: "home.blog3Text",
      href: "/inquiry?service=flight",
      dateKey: "home.blog3Date",
      readKey: "home.blog3Read",
   },
];

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
               {posts.map((post) => (
                  <div key={post.id} className="col-xl-4 col-md-6 mb-30">
                     <article className="ebt-blog-card">
                        <Link href={post.href} className="ebt-blog-thumb">
                           <Image src={post.thumb} alt={t(post.titleKey)} fill sizes="(max-width: 768px) 100vw, 33vw" />
                           <span className="ebt-blog-tag">{t(post.tagKey)}</span>
                        </Link>
                        <div className="ebt-blog-body">
                           <div className="ebt-blog-meta">
                              <span>
                                 <CalendarDays size={14} strokeWidth={1.75} aria-hidden="true" />
                                 {t(post.dateKey)}
                              </span>
                              <span>
                                 <Clock3 size={14} strokeWidth={1.75} aria-hidden="true" />
                                 {t(post.readKey)}
                              </span>
                           </div>
                           <h3 className="ebt-blog-title">
                              <Link href={post.href}>{t(post.titleKey)}</Link>
                           </h3>
                           <p className="ebt-blog-text mb-0">{t(post.textKey)}</p>
                        </div>
                     </article>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default HomeBlog;
