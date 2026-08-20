"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   onPageChange: (page: number) => void;
}

export const Pagination = ({
   currentPage,
   totalPages,
   onPageChange,
}: PaginationProps) => {
   if (totalPages <= 1) return null;

   return (
      <div className="ebt-blog-pagination mt-45">
         <nav aria-label="Pagination">
            <ul className="ebt-pagination-list">
               <li>
                  <button
                     type="button"
                     className="ebt-page-btn ebt-page-prev"
                     disabled={currentPage === 1}
                     onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                     aria-label="Previous page"
                  >
                     <ChevronLeft size={18} />
                  </button>
               </li>
               {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                     <li key={pageNum}>
                        <button
                           type="button"
                           className={`ebt-page-btn ${currentPage === pageNum ? "is-active" : ""}`}
                           onClick={() => onPageChange(pageNum)}
                           aria-current={currentPage === pageNum ? "page" : undefined}
                        >
                           {pageNum}
                        </button>
                     </li>
                  );
               })}
               <li>
                  <button
                     type="button"
                     className="ebt-page-btn ebt-page-next"
                     disabled={currentPage === totalPages}
                     onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                     aria-label="Next page"
                  >
                     <ChevronRight size={18} />
                  </button>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Pagination;
