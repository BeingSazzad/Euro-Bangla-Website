"use client"
import Image, { StaticImageData } from "next/image";

import thumb_1 from "@/assets/img/destination/des.jpg"
import thumb_2 from "@/assets/img/destination/des-2.jpg"
import thumb_3 from "@/assets/img/destination/des-3.jpg"
import thumb_4 from "@/assets/img/destination/des-4.jpg"
import shape from "@/assets/img/listing/listing-2/shape.png"
import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";

interface DataType {
   id: number;
   thumb: StaticImageData;
   titleKey: string;
   href: string;
}

const destination_data: DataType[] = [
   { id: 1, thumb: thumb_1, titleKey: "svc.europe", href: "/tours" },
   { id: 2, thumb: thumb_2, titleKey: "svc.dubai", href: "/tours" },
   { id: 3, thumb: thumb_3, titleKey: "svc.turkey", href: "/tours" },
   { id: 4, thumb: thumb_4, titleKey: "svc.ksa", href: "/hajj-umrah" },
]

const Destination = () => {
   const { t } = useT();

   return (
      <div className="tg-destination-area ebt-section">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tg-destination-section-title text-center mb-50">
                     <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">{t("home.destSubtitle")}</h5>
                     <h2 className="mb-15 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">{t("home.destTitle")}</h2>
                     <p className="text-capitalize wow fadeInUp mb-0" data-wow-delay=".6s" data-wow-duration=".8s">{t("home.destText")}</p>
                  </div>
               </div>
               {destination_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                     <div className="tg-destination-item mb-30 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".6s">
                        <div className="tg-destination-thumb fix p-relative">
                           <Link href={item.href}>
                              <Image className="w-100" src={item.thumb} alt={t(item.titleKey)} />
                           </Link>
                           <div className="tg-listing-2-mask">
                              <Image className="w-100" src={shape} alt="" />
                           </div>
                        </div>
                        <div className="tg-destination-content text-center">
                           <div className="tg-destination-meta">
                              <Link href={item.href}>{t(item.titleKey)}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Destination
