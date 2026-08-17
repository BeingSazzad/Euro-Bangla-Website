"use client"
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
   tours: string;
   hotels: string;
   activities: string;
   restaurants: string;
}

const destination_data: DataType[] = [
   { id: 1, thumb: thumb_1, titleKey: "svc.europe", href: "/tours/europe-highlights", tours: "01", hotels: "02", activities: "04", restaurants: "01" },
   { id: 2, thumb: thumb_2, titleKey: "svc.dubai", href: "/tours/dubai-family", tours: "01", hotels: "02", activities: "04", restaurants: "01" },
   { id: 3, thumb: thumb_3, titleKey: "svc.turkey", href: "/tours/turkey-honeymoon", tours: "01", hotels: "02", activities: "04", restaurants: "01" },
   { id: 4, thumb: thumb_4, titleKey: "svc.ksa", href: "/tours/ksa-short", tours: "01", hotels: "02", activities: "04", restaurants: "01" },
]

const Destination = () => {
   const { t } = useT();
   const scrollerRef = useRef<HTMLDivElement>(null);
   const [canPrev, setCanPrev] = useState(false);
   const [canNext, setCanNext] = useState(false);

   const syncArrows = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 8);
      setCanNext(max > 8 && el.scrollLeft < max - 8);
   }, []);

   const scrollByCard = (direction: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const card = el.querySelector(".ebt-dest-card") as HTMLElement | null;
      const step = (card?.offsetWidth ?? 300) + 24;
      el.scrollBy({ left: direction * step, behavior: "smooth" });
   };

   useEffect(() => {
      const el = scrollerRef.current;
      if (!el) return;

      syncArrows();
      el.addEventListener("scroll", syncArrows, { passive: true });
      window.addEventListener("resize", syncArrows);

      const onWheel = (event: WheelEvent) => {
         if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
         event.preventDefault();
         el.scrollLeft += event.deltaY;
      };
      el.addEventListener("wheel", onWheel, { passive: false });

      return () => {
         el.removeEventListener("scroll", syncArrows);
         el.removeEventListener("wheel", onWheel);
         window.removeEventListener("resize", syncArrows);
      };
   }, [syncArrows]);

   return (
      <div className="tg-destination-area ebt-section">
         <div className="container">
            <div className="tg-destination-section-title text-center mb-30">
               <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">{t("home.destSubtitle")}</h5>
               <h2 className="mb-15 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">{t("home.destTitle")}</h2>
               <p className="text-capitalize wow fadeInUp mb-0" data-wow-delay=".6s" data-wow-duration=".8s">{t("home.destText")}</p>
            </div>
            <div className="ebt-dest-carousel">
               <button
                  type="button"
                  className="ebt-dest-arrow ebt-dest-arrow--prev"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canPrev}
                  aria-label="Previous destinations"
               >
                  <ChevronLeft size={22} strokeWidth={2.25} aria-hidden="true" />
               </button>
               <div
                  className="ebt-dest-scroll"
                  ref={scrollerRef}
                  role="region"
                  aria-label={t("home.destTitle")}
                  tabIndex={0}
               >
                  <div className="ebt-dest-track">
                     {destination_data.map((item) => (
                        <Link key={item.id} href={item.href} className="ebt-dest-card" aria-label={t(item.titleKey)}>
                           <div className="tg-destination-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".6s">
                              <div className="tg-destination-thumb fix p-relative">
                                 <span className="ebt-destination-media">
                                    <Image
                                       className="w-100"
                                       src={item.thumb}
                                       alt=""
                                       sizes="300px"
                                       style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                 </span>
                                 <div className="tg-listing-2-mask" aria-hidden="true">
                                    <Image className="w-100" src={shape} alt="" />
                                 </div>
                              </div>
                              <div className="tg-destination-content text-center">
                                 <div className="tg-destination-meta">
                                    <span>{t(item.titleKey)}</span>
                                 </div>
                                 <div className="tg-destination-tag">
                                    <span>{item.tours} {t("home.destTour")}</span>
                                    <span>{item.hotels} {t("home.destHotel")}</span>
                                    <span>{item.activities} {t("home.destActivity")}</span>
                                    <span>{item.restaurants} {t("home.destRestaurant")}</span>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
               <button
                  type="button"
                  className="ebt-dest-arrow ebt-dest-arrow--next"
                  onClick={() => scrollByCard(1)}
                  disabled={!canNext}
                  aria-label="Next destinations"
               >
                  <ChevronRight size={22} strokeWidth={2.25} aria-hidden="true" />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Destination
