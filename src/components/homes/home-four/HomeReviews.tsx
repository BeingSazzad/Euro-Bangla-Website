"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { ICON_SIZE } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";

import avatar_1 from "@/assets/img/testimonial/avatar.png";
import avatar_2 from "@/assets/img/testimonial/avatar-2.png";
import avatar_3 from "@/assets/img/testimonial/avatar-3.png";

const reviews = [
   { id: 1, avatar: avatar_1, nameKey: "home.review1Name", roleKey: "home.review1Role", textKey: "home.review1Text" },
   { id: 2, avatar: avatar_2, nameKey: "home.review2Name", roleKey: "home.review2Role", textKey: "home.review2Text" },
   { id: 3, avatar: avatar_3, nameKey: "home.review3Name", roleKey: "home.review3Role", textKey: "home.review3Text" },
   { id: 4, avatar: avatar_1, nameKey: "home.review4Name", roleKey: "home.review4Role", textKey: "home.review4Text" },
];

const setting = {
   spaceBetween: 24,
   loop: true,
   speed: 700,
   autoplay: { delay: 4500, disableOnInteraction: false },
   pagination: { el: ".ebt-reviews-pagination", clickable: true },
   breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
   },
};

const HomeReviews = () => {
   const { t } = useT();

   return (
      <section className="ebt-home-reviews ebt-section">
         <div className="container">
            <div className="text-center mb-45">
               <h5 className="tg-section-subtitle mb-15">{t("home.reviewSubtitle")}</h5>
               <h2 className="ebt-home-block-title mb-12">{t("home.reviewTitle")}</h2>
               <p className="ebt-home-block-text mb-0">{t("home.reviewText")}</p>
            </div>

            <Swiper {...setting} modules={[Autoplay, Pagination]} className="ebt-reviews-slider">
               {reviews.map((item) => (
                  <SwiperSlide key={item.id}>
                     <article className="ebt-review-card">
                        <div className="ebt-review-stars" aria-hidden="true">
                           {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} size={ICON_SIZE.sm} strokeWidth={0} fill="currentColor" />
                           ))}
                        </div>
                        <p className="ebt-review-text">{t(item.textKey)}</p>
                        <div className="ebt-review-author">
                           <Image src={item.avatar} alt="" width={48} height={48} className="ebt-review-avatar" />
                           <div>
                              <h4 className="ebt-review-name">{t(item.nameKey)}</h4>
                              <span className="ebt-review-role">{t(item.roleKey)}</span>
                           </div>
                        </div>
                     </article>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="ebt-reviews-pagination swiper-pagination"></div>
         </div>
      </section>
   );
};

export default HomeReviews;
