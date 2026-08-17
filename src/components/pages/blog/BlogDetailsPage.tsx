"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3 } from "lucide-react";
import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import { blogPosts, findBlog } from "@/data/blogPosts";
import { iconProps } from "@/data/icons";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const BlogDetailsPage = ({ slug }: { slug: string }) => {
   const { t, locale } = useT();
   const post = findBlog(slug);
   if (!post) notFound();

   const title = t(post.titleKey);
   const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb
               title={title}
               sub_title={title}
               raw
               parentHref="/blog"
               parentKey="page.blog"
            />
            <div className="tg-blog-grid-area ebt-page-content">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-8 col-lg-8">
                        <article className="tg-blog-details-wrap tg-blog-lg-spacing mb-50">
                           <div className="tg-blog-standard-item mb-35">
                              <div className="tg-blog-standard-thumb ebt-blog-details-thumb mb-20">
                                 <Image
                                    className="w-100"
                                    src={post.thumb}
                                    alt={title}
                                    sizes="(max-width: 992px) 100vw, 66vw"
                                 />
                                 <span className="ebt-blog-tag">{t(post.tagKey)}</span>
                              </div>
                              <div className="tg-blog-standard-content">
                                 <div className="tg-blog-standard-date ebt-blog-meta mb-15">
                                    <span>
                                       <CalendarDays {...iconProps("sm")} />
                                       {t(post.dateKey)}
                                    </span>
                                    <span>
                                       <Clock3 {...iconProps("sm")} />
                                       {t(post.readKey)}
                                    </span>
                                    <span>{t("blogDetail.by")}</span>
                                 </div>
                                 <h2 className="tg-blog-standard-title mb-20">{title}</h2>
                                 <p className="ebt-blog-details-lead">{t(post.textKey)}</p>
                                 {post.body.map((para) => (
                                    <p key={para.en} className="tg-blog-para lh-28 mb-20">
                                       {tx(para, locale)}
                                    </p>
                                 ))}
                                 <h3 className="ebt-blog-details-sub mb-15">{t("blogDetail.tips")}</h3>
                                 <ul className="ebt-blog-details-tips mb-30">
                                    {post.tips.map((tip) => (
                                       <li key={tip.en}>
                                          <i className="fa-sharp fa-solid fa-check" aria-hidden="true" />
                                          <span>{tx(tip, locale)}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </article>
                     </div>
                     <div className="col-xl-4 col-lg-4">
                        <aside className="ebt-blog-related">
                           <h3 className="ebt-blog-related-title mb-25">{t("blogDetail.related")}</h3>
                           {related.map((item) => (
                              <Link key={item.slug} href={item.href} className="ebt-blog-related-item">
                                 <Image src={item.thumb} alt={t(item.titleKey)} width={88} height={72} />
                                 <span>
                                    <strong>{t(item.titleKey)}</strong>
                                    <em>{t(item.dateKey)}</em>
                                 </span>
                              </Link>
                           ))}
                        </aside>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <FooterThree />
      </>
   );
};

export default BlogDetailsPage;
