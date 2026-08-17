"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";

import thumb_1 from "@/assets/img/destination/des.jpg"
import thumb_2 from "@/assets/img/destination/des-2.jpg"
import thumb_3 from "@/assets/img/destination/des-3.jpg"
import thumb_4 from "@/assets/img/destination/des-4.jpg"
import { useT } from "@/i18n/LanguageProvider";

interface DataType {
   id: number;
   thumb: StaticImageData;
   titleKey: string;
   href: string;
}

const destination_data: DataType[] = [
   { id: 1, thumb: thumb_1, titleKey: "svc.europe", href: "/tours/europe-highlights" },
   { id: 2, thumb: thumb_2, titleKey: "svc.dubai", href: "/tours/dubai-family" },
   { id: 3, thumb: thumb_3, titleKey: "svc.turkey", href: "/tours/turkey-honeymoon" },
   { id: 4, thumb: thumb_4, titleKey: "svc.ksa", href: "/tours/ksa-short" },
]

const setting = {
   effect: "coverflow" as const,
   slidesPerView: "auto" as const,
   centeredSlides: true,
   initialSlide: 1,
   spaceBetween: 12,
   grabCursor: true,
   speed: 650,
   slideToClickedSlide: true,
   keyboard: { enabled: true },
   coverflowEffect: {
      rotate: 28,
      stretch: 34,
      depth: 130,
      scale: 0.9,
      modifier: 1,
      slideShadows: true,
   },
   pagination: { el: ".ebt-dest-pagination", clickable: true },
};

const Destination = () => {
   const { t } = useT();
   const services = [t("home.destTour"), t("home.destHotel"), t("home.destActivity"), t("home.destRestaurant")].join(" · ");

   return (
      <div className="tg-destination-area ebt-section">
         <div className="container">
            <div className="tg-destination-section-title text-center mb-30">
               <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">{t("home.destSubtitle")}</h5>
               <h2 className="mb-15 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">{t("home.destTitle")}</h2>
               <p className="text-capitalize wow fadeInUp mb-0" data-wow-delay=".6s" data-wow-duration=".8s">{t("home.destText")}</p>
            </div>
            <div className="ebt-dest-carousel" role="region" aria-label={t("home.destTitle")}>
               <Swiper {...setting} modules={[EffectCoverflow, Keyboard, Pagination]} className="ebt-dest-slider">
                  {destination_data.map((item) => (
                     <SwiperSlide key={item.id} className="ebt-dest-slide">
                        <article className="ebt-dest-card">
                           <Image
                              className="ebt-dest-img"
                              src={item.thumb}
                              alt=""
                              fill
                              sizes="(max-width: 575px) 60vw, 290px"
                           />
                           <Link href={item.href} className="ebt-dest-link">
                              <span className="ebt-dest-veil" aria-hidden="true" />
                              <span className="ebt-dest-body">
                                 <h3 className="ebt-dest-name">{t(item.titleKey)}</h3>
                                 <span className="ebt-dest-meta">{services}</span>
                              </span>
                           </Link>
                        </article>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="ebt-dest-pagination swiper-pagination"></div>
            </div>
         </div>
      </div>
   )
}

export default Destination
