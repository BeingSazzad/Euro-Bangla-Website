"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/common/BlogCard";
import Pagination from "@/components/common/Pagination";
import BlogSidebar from "@/components/blogs/BlogSidebar";
import { blogPosts } from "@/data/blogPosts";
import { useT } from "@/i18n/LanguageProvider";

const POSTS_PER_PAGE = 4;

const BlogArea = () => {
   const { t } = useT();
   const [searchQuery, setSearchQuery] = useState("");
   const [currentPage, setCurrentPage] = useState(1);

   // Filter posts based on search query (Ready to be swapped with API response)
   const filteredPosts = useMemo(() => {
      if (!searchQuery.trim()) return blogPosts;
      const query = searchQuery.toLowerCase().trim();

      return blogPosts.filter((post) => {
         const title = t(post.titleKey).toLowerCase();
         const text = t(post.textKey).toLowerCase();
         const tag = t(post.tagKey).toLowerCase();

         return title.includes(query) || text.includes(query) || tag.includes(query);
      });
   }, [searchQuery, t]);

   // Calculate pagination
   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
   const paginatedPosts = useMemo(() => {
      const start = (currentPage - 1) * POSTS_PER_PAGE;
      return filteredPosts.slice(start, start + POSTS_PER_PAGE);
   }, [filteredPosts, currentPage]);

   const handleSearch = (query: string) => {
      setSearchQuery(query);
      setCurrentPage(1);
   };

   return (
      <section className="ebt-blog-page-area ebt-page-content">
         <div className="container">
            <div className="row g-4">
               {/* ─── Main Blog Posts Grid (Left Column) ─── */}
               <div className="col-xl-8 col-lg-8">
                  {paginatedPosts.length === 0 ? (
                     <div className="ebt-blog-empty text-center py-5">
                        <h3>No articles found</h3>
                        <p className="text-muted">
                           Try searching for different keywords like &quot;visa&quot;, &quot;umrah&quot;, or &quot;flight&quot;.
                        </p>
                        <button
                           type="button"
                           className="btn btn-primary mt-2"
                           onClick={() => handleSearch("")}
                        >
                           Reset Search
                        </button>
                     </div>
                  ) : (
                     <>
                        <div className="row g-4">
                           {paginatedPosts.map((post) => (
                              <div key={post.id} className="col-md-6">
                                 <BlogCard post={post} />
                              </div>
                           ))}
                        </div>

                        {/* Standalone Reusable Pagination */}
                        <Pagination
                           currentPage={currentPage}
                           totalPages={totalPages}
                           onPageChange={setCurrentPage}
                        />
                     </>
                  )}
               </div>

               {/* ─── Modular Reusable Sidebar (Right Column) ─── */}
               <div className="col-xl-4 col-lg-4">
                  <BlogSidebar
                     searchQuery={searchQuery}
                     onSearchChange={handleSearch}
                     recentPosts={blogPosts.slice(0, 3)}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default BlogArea;
