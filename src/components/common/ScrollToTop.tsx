"use client";
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { iconProps } from "@/data/icons";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();
   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      const checkScrollTop = () => {
         const currentScroll = window.pageYOffset > 400;
         setShowScroll(prev => (prev !== currentScroll ? currentScroll : prev));
      };

      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, []);

   return (
      <button
         onClick={scrollTop}
         className={`scroll__top scroll-to-target ${sticky && showScroll ? "open" : ""}`}
         data-target="html"
      >
         <ArrowUp {...iconProps("md")} />
      </button>
   );
};

export default ScrollToTop;
