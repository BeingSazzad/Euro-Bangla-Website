"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Phone, MessageSquare, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import { COMPANY, whatsappLink } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";

interface BlogSidebarProps {
   searchQuery?: string;
   onSearchChange?: (query: string) => void;
   recentPosts: BlogPost[];
   showSearch?: boolean;
}

export const BlogSidebar = ({
   searchQuery = "",
   onSearchChange,
   recentPosts,
   showSearch = true,
}: BlogSidebarProps) => {
   const { t } = useT();

   return (
      <aside className="ebt-blog-sidebar">
         {/* Search Widget */}
         {showSearch && onSearchChange && (
            <div className="ebt-sidebar-widget mb-30">
               <h4 className="ebt-sidebar-widget-title">Search Articles</h4>
               <div className="ebt-sidebar-search-box">
                  <input
                     type="text"
                     value={searchQuery}
                     onChange={(e) => onSearchChange(e.target.value)}
                     placeholder="Search tips, visa, hajj..."
                     aria-label="Search articles"
                  />
                  <Search size={18} className="ebt-sidebar-search-icon" />
               </div>
            </div>
         )}

         {/* Recent Posts Widget */}
         {recentPosts.length > 0 && (
            <div className="ebt-sidebar-widget mb-30">
               <h4 className="ebt-sidebar-widget-title">Recent Articles</h4>
               <div className="ebt-sidebar-recent-list">
                  {recentPosts.map((post) => (
                     <Link key={post.slug} href={post.href} className="ebt-sidebar-recent-item">
                        <div className="ebt-sidebar-recent-thumb">
                           <Image
                              src={post.thumb}
                              alt={t(post.titleKey)}
                              width={80}
                              height={65}
                              className="rounded-3 object-fit-cover"
                           />
                        </div>
                        <div className="ebt-sidebar-recent-info">
                           <h5 className="ebt-sidebar-recent-title">{t(post.titleKey)}</h5>
                           <span className="ebt-sidebar-recent-date">
                              <Clock size={12} className="mr-4 d-inline" />
                              {t(post.dateKey)}
                           </span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         )}

         {/* Need Help / Consultation Card */}
         <div className="ebt-sidebar-help-card">
            <div className="ebt-help-card-inner">
               <h4 className="ebt-help-title">Need Travel Help?</h4>
               <p className="ebt-help-desc">
                  Our consultants in Dhanmondi are ready to guide your visa, tickets and packages.
               </p>
               <Link
                  href={whatsappLink("Hello Euro Bangla Travels, I have an inquiry from the blog.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ebt-help-btn ebt-help-btn--wa"
               >
                  <MessageSquare size={16} /> WhatsApp Inquiry
               </Link>
               <Link href={`tel:${COMPANY.phoneTel}`} className="ebt-help-btn ebt-help-btn--tel">
                  <Phone size={16} /> {COMPANY.phone}
               </Link>
            </div>
         </div>
      </aside>
   );
};

export default BlogSidebar;
