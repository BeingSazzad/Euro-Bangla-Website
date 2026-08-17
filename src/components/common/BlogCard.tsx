"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { useT } from "@/i18n/LanguageProvider";

const BlogCard = ({ post }: { post: BlogPost }) => {
   const { t } = useT();

   return (
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
   );
};

export default BlogCard;
