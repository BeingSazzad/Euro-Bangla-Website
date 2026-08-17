"use client"
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";

interface DataType {
   sub_title: string;
   title: string;
   /** When true, title/sub_title are shown as raw text (not i18n keys). */
   raw?: boolean;
   parentHref?: string;
   parentKey?: string;
   bannerSrc?: string;
}
const BreadCrumb = ({ sub_title, title, raw = false, parentHref, parentKey, bannerSrc }: DataType) => {
   const { t } = useT();
   const titleLabel = raw ? title : t(title);
   const crumbLabel = raw ? sub_title : t(sub_title);
   const parentLabel = parentKey ? t(parentKey) : null;
   const resolvedParent = parentHref || (raw ? "/visa" : "");
   const resolvedParentLabel = parentLabel || (raw ? t("nav.visa") : "");

   return (
      <div className="tg-breadcrumb-area tg-breadcrumb-spacing-5 ebt-breadcrumb fix p-relative z-index-1 include-bg" style={{ backgroundImage: `url(${bannerSrc || "/assets/img/breadcrumb/breadcrumb.jpg"})` }}>
         <div className="tg-hero-top-shadow"></div>
         <div className="tg-breadcrumb-shadow"></div>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tg-breadcrumb-content text-center">
                     <h2 className="tg-breadcrumb-title">{titleLabel}</h2>
                     <div className="tg-breadcrumb-list-4">
                        <ul>
                           <li><Link href="/">{t("page.home")}</Link></li>
                           <li><ChevronRight {...iconProps("sm")} /></li>
                           {resolvedParent ? (
                              <>
                                 <li><Link href={resolvedParent}>{resolvedParentLabel}</Link></li>
                                 <li><ChevronRight {...iconProps("sm")} /></li>
                                 <li>{crumbLabel}</li>
                              </>
                           ) : (
                              <li>{crumbLabel}</li>
                           )}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tg-hero-bottom-shape d-none d-md-block">
            <span>
               <svg width="432" height="187" viewBox="0 0 432 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="line-1" opacity="0.4" d="M39.6042 428.345C4.41235 355.065 -24.3018 203.867 142.377 185.309C350.725 162.111 488.893 393.541 289.169 313.515C129.389 249.494 458.202 85.4772 642.58 11.4713" stroke="white" strokeWidth="24" />
               </svg>
            </span>
         </div>
         <div className="tg-hero-bottom-shape-2 d-none d-md-block">
            <span>
               <svg width="154" height="243" viewBox="0 0 154 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="line-1" opacity="0.4" d="M144.616 328.905C116.117 300.508 62.5986 230.961 76.5162 179.949C93.9131 116.184 275.231 7.44494 -65.0181 12.8762" stroke="white" strokeWidth="24" />
               </svg>
            </span>
         </div>
      </div>
   )
}

export default BreadCrumb
