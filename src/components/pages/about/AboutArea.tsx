"use client"
import Image from "next/image"
import Button from "@/components/common/Button"
import Link from "next/link"
import { useT } from "@/i18n/LanguageProvider"
import type { Locale } from "@/i18n/locales"
import { tx } from "@/data/localized"
import { findHajj, findTour } from "@/data/services"

import shape_1 from "@/assets/img/about/details/shape.png"
import shape_2 from "@/assets/img/about/details/shape-2.png"
import shape_4 from "@/assets/img/chose/chose-3/star.png"
import europe from "@/assets/img/destination/des.jpg"
import kaaba from "@/assets/img/chose/chose-2/thumb-2.jpg"
import madinah from "@/assets/img/destination/des-4.jpg"

const aboutCards = [
   {
      href: "/tours/europe-highlights",
      image: europe,
      item: findTour("europe-highlights"),
      tall: false,
   },
   {
      href: "/hajj-umrah/hajj-group-2026",
      image: kaaba,
      item: findHajj("hajj-group-2026"),
      tall: false,
   },
   {
      href: "/hajj-umrah/economy-umrah-14",
      image: madinah,
      item: findHajj("economy-umrah-14"),
      tall: true,
   },
] as const;

const AboutArea = () => {
   const { t, locale } = useT();
   const [europeCard, hajjCard, umrahCard] = aboutCards;

   return (
      <div className="tg-about-area p-relative z-index-1 ebt-section">
         <Image className="tg-about-details-shape p-absolute d-none d-lg-block" src={shape_1} alt="" />
         <div className="container">
            <div className="row align-items-center ebt-about-row">
               <div className="col-lg-6">
                  <div className="tg-about-details-left ebt-about-collage p-relative">
                     <Image className="tg-about-details-map p-absolute" src={shape_2} alt="" />
                     <div className="ebt-about-collage-grid">
                        <div className="ebt-about-col">
                           <AboutPhotoCard card={europeCard} locale={locale} />
                           <AboutPhotoCard card={hajjCard} locale={locale} />
                        </div>
                        <div className="ebt-about-col">
                           <div className="tg-chose-3-rounded ebt-about-seal p-relative">
                              <Image
                                 className="rotate-infinite-2"
                                 src="/assets/img/about/details/seal.svg"
                                 alt=""
                                 width={140}
                                 height={140}
                                 unoptimized
                              />
                              <Image className="tg-chose-3-star" src={shape_4} alt="" />
                           </div>
                           <AboutPhotoCard card={umrahCard} locale={locale} />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="ebt-about-copy">
                     <div className="tg-chose-section-title">
                        <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">{t("about.subtitle")}</h5>
                        <h2 className="mb-20 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">{t("about.title")}</h2>
                        <p className="text-capitalize wow fadeInUp ebt-about-copy-text" data-wow-delay=".5s" data-wow-duration=".9s">{t("about.text")}</p>
                        <div className="tg-chose-btn wow fadeInUp" data-wow-delay=".8s" data-wow-duration=".9s">
                           <Link href="/inquiry" className="tg-btn tg-btn-switch-animation">
                              <Button text={t("about.book")} />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

const AboutPhotoCard = ({
   card,
   locale,
}: {
   card: (typeof aboutCards)[number];
   locale: Locale;
}) => {
   if (!card.item) return null;

   return (
      <Link
         href={card.href}
         className={`ebt-about-card${card.tall ? " ebt-about-card--tall" : ""}`}
      >
         <Image
            src={card.image}
            alt={tx(card.item.title, locale)}
            sizes="(max-width: 768px) 50vw, 280px"
         />
         <span className="ebt-about-card-label">{tx(card.item.title, locale)}</span>
      </Link>
   );
};

export default AboutArea
