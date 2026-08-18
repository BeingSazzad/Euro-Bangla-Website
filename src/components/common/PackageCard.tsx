"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import type { PackageItem } from "@/data/services";
import { iconProps } from "@/data/icons";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

import shape from "@/assets/img/listing/listing-2/shape.png";

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
   const title = tx(item.title, locale);

   return (
      <Link href={href} className="tg-listing-card-item tg-listing-2-card-item ebt-tour-card w-100" aria-label={title}>
         <div className="tg-listing-card-thumb tg-listing-2-card-thumb ebt-tour-card-thumb fix p-relative">
            <span className="ebt-tour-card-media">
               <Image
                  className="tg-card-border w-100"
                  src={item.thumb}
                  alt=""
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
               />
            </span>
            <div className="tg-listing-2-mask" aria-hidden="true">
               <Image className="w-100" src={shape} alt="" />
            </div>
         </div>
         <div className="tg-listing-card-content p-relative">
            <div className="tg-listing-2-price-wrap text-center">
               <div className="tg-listing-2-price">
                  <span className="new">{item.price.toLocaleString("en-US")}</span>
                  <span className="shift">{priceSuffix.trim()}</span>
               </div>
            </div>
            <h4 className="tg-listing-card-title">{title}</h4>
            <div className="ebt-tour-card-meta">
               <span className="ebt-tour-card-meta-row">
                  <MapPin {...iconProps("sm")} />
                  {tx(item.location, locale)}
               </span>
               {item.days > 1 && (
                  <span className="ebt-tour-card-meta-row">
                     <Clock3 {...iconProps("sm")} />
                     {item.days} {t("svc.days")}
                  </span>
               )}
            </div>
         </div>
      </Link>
   );
};

export default PackageCard;
