"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";

import thumb_1 from "@/assets/img/destination/des.jpg";
import thumb_2 from "@/assets/img/destination/des-2.jpg";
import thumb_3 from "@/assets/img/destination/des-3.jpg";
import thumb_4 from "@/assets/img/destination/des-4.jpg";

const destination_data: { id: number; thumb: StaticImageData; titleKey: string; href: string }[] = [
   { id: 1, thumb: thumb_1, titleKey: "svc.europe", href: "/tours/europe-highlights" },
   { id: 2, thumb: thumb_2, titleKey: "svc.dubai", href: "/tours/dubai-family" },
   { id: 3, thumb: thumb_3, titleKey: "svc.turkey", href: "/tours/turkey-honeymoon" },
   { id: 4, thumb: thumb_4, titleKey: "svc.ksa", href: "/tours/ksa-short" },
];

const Destination = () => {
   const { t } = useT();

   return (
      <div className="tg-destination-area ebt-section">
         <div className="container">
            <div className="tg-destination-section-title text-center mb-40">
               <h5 className="tg-section-subtitle mb-15">{t("home.destSubtitle")}</h5>
               <h2 className="mb-12">{t("home.destTitle")}</h2>
               <p className="mb-0">{t("home.destText")}</p>
            </div>
            <ul className="ebt-dest-grid">
               {destination_data.map((item) => (
                  <li key={item.id}>
                     <Link href={item.href} className="ebt-dest-card">
                        <Image
                           className="ebt-dest-img"
                           src={item.thumb}
                           alt={t(item.titleKey)}
                           fill
                           sizes="(max-width: 1199px) 50vw, 25vw"
                        />
                        <span className="ebt-dest-veil" aria-hidden="true" />
                        <span className="ebt-dest-body">
                           <h3 className="ebt-dest-name">{t(item.titleKey)}</h3>
                           <span className="ebt-dest-cta">
                              {t("home.destExplore")}
                              <ArrowRight {...iconProps("sm")} />
                           </span>
                        </span>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Destination;
