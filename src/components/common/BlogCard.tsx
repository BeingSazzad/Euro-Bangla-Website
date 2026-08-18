"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";

const BlogCard = ({ post }: { post: BlogPost }) => {
   const { t } = useT();
   const title = t(post.titleKey);

   return (
      <Link href={post.href} className="ebt-blog-card" aria-label={title}>
         <div className="ebt-blog-thumb">
            <Image src={post.thumb} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
            <span className="ebt-blog-tag">{t(post.tagKey)}</span>
         </div>
         <div className="ebt-blog-body">
            <div className="ebt-blog-meta">
               <span>
                  <CalendarDays {...iconProps("sm")} />
                  {t(post.dateKey)}
               </span>
               <span>
                  <Clock3 {...iconProps("sm")} />
                  {t(post.readKey)}
               </span>
            </div>
            <h3 className="ebt-blog-title">{title}</h3>
            <p className="ebt-blog-text">{t(post.textKey)}</p>
         </div>
      </Link>
   );
};

export default BlogCard;
