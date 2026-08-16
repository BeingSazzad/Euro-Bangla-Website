"use client";

import Image from "next/image";
import Link from "next/link";
import type { PackageItem } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

const PackageCard = ({
   item,
   href,
   priceSuffix,
}: {
   item: PackageItem;
   href: string;
   priceSuffix: string;
}) => {
   const { locale, t } = useT();

   return (
      <div className="tg-listing-card-item tg-listing-2-card-item mb-25">
         <div className="tg-listing-card-thumb tg-listing-2-card-thumb fix p-relative">
            <Link href={href}>
               <Image className="tg-card-border w-100" src={item.thumb} alt={tx(item.title, locale)} />
               {item.tag && <span className="tg-listing-item-price-discount shape-2">{tx(item.tag, locale)}</span>}
            </Link>
         </div>
         <div className="tg-listing-card-content p-relative">
            <div className="tg-listing-2-price-wrap text-center">
               <div className="tg-listing-2-price">
                  <span className="new">BDT {item.price.toLocaleString()}</span>
                  <span className="shift">{priceSuffix}</span>
               </div>
            </div>
            <h4 className="tg-listing-card-title">
               <Link href={href}>{tx(item.title, locale)}</Link>
            </h4>
            <p className="mb-10">{tx(item.summary, locale)}</p>
            <div className="tg-listing-card-duration-tour">
               <span className="tg-listing-card-duration-map mb-5">{tx(item.location, locale)}</span>
               {item.days > 1 && (
                  <span className="tg-listing-card-duration-time">
                     {item.days} {t("svc.days")}
                  </span>
               )}
            </div>
            <div className="pt-15">
               <Link href={href} className="tg-btn">
                  {t("svc.details")}
               </Link>
            </div>
         </div>
      </div>
   );
};

export default PackageCard;
