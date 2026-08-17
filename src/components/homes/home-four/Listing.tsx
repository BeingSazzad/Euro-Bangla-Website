"use client"
import Image from "next/image"
import Link from "next/link"
import { Clock3, MapPin } from "lucide-react"

import cardShape from "@/assets/img/listing/listing-2/shape.png"
import Button from "@/components/common/Button"
import { useT } from "@/i18n/LanguageProvider"
import { tourPackages } from "@/data/services"
import { tx } from "@/data/localized"

const Listing = () => {
   const { t, locale } = useT();

   return (
      <div className="tg-listing-area tg-grey-bg ebt-section p-relative z-index-1">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tg-listing-section-title text-center mb-50">
                     <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">{t("home.listingSubtitle")}</h5>
                     <h2 className="mb-15 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">{t("home.listingTitle")}</h2>
                     <p className="text-capitalize wow fadeInUp mb-0" data-wow-delay=".6s" data-wow-duration=".8s">{t("home.listingText")}</p>
                  </div>
               </div>
            </div>
            <div className="row align-items-stretch">
               {tourPackages.map((item) => {
                  const title = tx(item.title, locale);

                  return (
                     <div key={item.slug} className="col-xl-3 col-lg-4 col-md-6 d-flex wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".6s">
                        <Link href={`/tours/${item.slug}`} className="tg-listing-card-item tg-listing-2-card-item ebt-tour-card mb-25 w-100" aria-label={title}>
                           <div className="tg-listing-card-thumb tg-listing-2-card-thumb ebt-tour-card-thumb fix p-relative">
                              <span className="ebt-tour-card-media">
                                 <Image
                                    className="tg-card-border w-100"
                                    src={item.thumb}
                                    alt=""
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                 />
                                 {item.tag && <span className="tg-listing-item-price-discount shape-2">{tx(item.tag, locale)}</span>}
                              </span>
                              <div className="tg-listing-2-mask" aria-hidden="true">
                                 <Image className="w-100" src={cardShape} alt="" />
                              </div>
                           </div>
                           <div className="tg-listing-card-content p-relative">
                              <div className="tg-listing-2-price-wrap text-center">
                                 <div className="tg-listing-2-price">
                                    <span className="new">BDT {item.price.toLocaleString("en-US")}</span>
                                    <span className="shift">{t("svc.perPerson")}</span>
                                 </div>
                              </div>
                              <h4 className="tg-listing-card-title">{title}</h4>
                              <div className="tg-listing-card-duration-tour">
                                 <span className="tg-listing-card-duration-map mb-0">
                                    <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
                                    {tx(item.location, locale)}
                                 </span>
                                 <span className="tg-listing-card-duration-time">
                                    <Clock3 size={14} strokeWidth={1.75} aria-hidden="true" />
                                    {item.days} {t("svc.days")}
                                 </span>
                              </div>
                           </div>
                        </Link>
                     </div>
                  );
               })}
               <div className="col-12 wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".6s">
                  <div className="tg-listing-2-btn text-center pt-30">
                     <Link href="/tours" className="tg-btn tg-btn-switch-animation">
                        <Button text={t("home.seeAll")} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Listing
