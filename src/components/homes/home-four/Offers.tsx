"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PackageCard from "@/components/common/PackageCard";
import Button from "@/components/common/Button";
import { tourPackages } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

const setting = {
   slidesPerView: 1,
   spaceBetween: 24,
   loop: true,
   speed: 800,
   autoplay: {
      delay: 4200,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".ebt-offers-pagination",
      clickable: true,
   },
   breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
   },
};

const Offers = () => {
   const { t } = useT();

   return (
      <section className="tg-listing-area ebt-offers-area ebt-section">
         <div className="container">
            <div className="tg-listing-section-title text-center mb-50">
               <h2 className="mb-15">{t("home.offersTitle")}</h2>
               <p className="mb-0">{t("home.offersText")}</p>
            </div>

            <Swiper
               {...setting}
               modules={[Autoplay, Pagination]}
               className="ebt-offers-slider"
            >
               {tourPackages.map((item) => (
                  <SwiperSlide key={item.slug}>
                     <PackageCard
                        item={item}
                        href={`/tours/${item.slug}`}
                        priceSuffix={t("svc.perPerson")}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>

            <div className="ebt-offers-pagination swiper-pagination"></div>

            <div className="tg-listing-2-btn text-center pt-30">
               <Link href="/tours" className="tg-btn tg-btn-switch-animation">
                  <Button text={t("home.seeAll")} />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Offers;
