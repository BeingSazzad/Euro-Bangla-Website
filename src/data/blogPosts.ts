import type { StaticImageData } from "next/image";
import blog_1 from "@/assets/img/blog/blog-2/blog-1.jpg";
import blog_2 from "@/assets/img/blog/blog-2/blog-2.jpg";
import blog_3 from "@/assets/img/blog/blog-2/blog-3.jpg";
import blog_4 from "@/assets/img/blog/blog-1.jpg";
import blog_5 from "@/assets/img/blog/blog-2.jpg";
import blog_6 from "@/assets/img/blog/blog-3.jpg";

export type BlogPost = {
   id: number;
   slug: string;
   thumb: StaticImageData;
   tagKey: string;
   titleKey: string;
   textKey: string;
   dateKey: string;
   readKey: string;
   href: string;
};

/** Full blog listing (home shows first 3). */
export const blogPosts: BlogPost[] = [
   {
      id: 1,
      slug: "umrah-preparation",
      thumb: blog_1,
      tagKey: "home.blog1Tag",
      titleKey: "home.blog1Title",
      textKey: "home.blog1Text",
      dateKey: "home.blog1Date",
      readKey: "home.blog1Read",
      href: "/hajj-umrah",
   },
   {
      id: 2,
      slug: "visa-documents",
      thumb: blog_2,
      tagKey: "home.blog2Tag",
      titleKey: "home.blog2Title",
      textKey: "home.blog2Text",
      dateKey: "home.blog2Date",
      readKey: "home.blog2Read",
      href: "/visa",
   },
   {
      id: 3,
      slug: "flight-inquiry-tips",
      thumb: blog_3,
      tagKey: "home.blog3Tag",
      titleKey: "home.blog3Title",
      textKey: "home.blog3Text",
      dateKey: "home.blog3Date",
      readKey: "home.blog3Read",
      href: "/inquiry?service=flight",
   },
   {
      id: 4,
      slug: "europe-family-tour",
      thumb: blog_4,
      tagKey: "home.blog4Tag",
      titleKey: "home.blog4Title",
      textKey: "home.blog4Text",
      dateKey: "home.blog4Date",
      readKey: "home.blog4Read",
      href: "/tours",
   },
   {
      id: 5,
      slug: "dubai-hotel-quote",
      thumb: blog_5,
      tagKey: "home.blog5Tag",
      titleKey: "home.blog5Title",
      textKey: "home.blog5Text",
      dateKey: "home.blog5Date",
      readKey: "home.blog5Read",
      href: "/hotels",
   },
   {
      id: 6,
      slug: "bus-ticket-inquiry",
      thumb: blog_6,
      tagKey: "home.blog6Tag",
      titleKey: "home.blog6Title",
      textKey: "home.blog6Text",
      dateKey: "home.blog6Date",
      readKey: "home.blog6Read",
      href: "/bus",
   },
];

export const homeBlogPosts = blogPosts.slice(0, 3);
