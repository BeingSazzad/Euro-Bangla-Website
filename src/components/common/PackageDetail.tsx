"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import type { PackageItem } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import InquiryForm from "@/components/forms/InquiryForm";

const PackageDetail = ({
   item,
   service,
   priceSuffix,
}: {
   item: PackageItem;
   service: string;
   priceSuffix: string;
}) => {
   const { locale, t } = useT();

   return (
      <div className="tg-tour-about-area ebt-page-content">
         <div className="container">
            <div className="row">
               <div className="col-lg-7 mb-40">
                  <Image className="w-100 tg-round-15 mb-25" src={item.thumb} alt={tx(item.title, locale)} />
                  {item.gallery && item.gallery.length > 0 && (
                     <div className="row mb-25">
                        {item.gallery.map((img, index) => (
                           <div key={index} className="col-4">
                              <Image className="w-100 tg-round-15 mb-15" src={img} alt={`${tx(item.title, locale)} ${index + 1}`} />
                           </div>
                        ))}
                     </div>
                  )}
                  <h2 className="mb-15">{tx(item.title, locale)}</h2>
                  {item.hotelName && <p className="mb-10">{t("svc.hotelName")}: {tx(item.hotelName, locale)}</p>}
                  <p className="mb-20">{tx(item.location, locale)} · {item.days > 1 ? `${item.days} ${t("svc.days")}` : ""}</p>
                  <h3 className="mb-20">
                     {t("svc.from")} {item.price.toLocaleString()} {priceSuffix}
                  </h3>
                  <p className="mb-30">{tx(item.summary, locale)}</p>
                  <div className="row">
                     <div className="col-md-6">
                        <h4 className="mb-15">{t("svc.includes")}</h4>
                        <ul className="mb-30">
                           {item.includes.map((line, index) => (
                              <li key={index}>{tx(line, locale)}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="col-md-6">
                        <h4 className="mb-15">{t("svc.excludes")}</h4>
                        <ul className="mb-30">
                           {item.excludes.map((line, index) => (
                              <li key={index}>{tx(line, locale)}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  {item.facilities && item.facilities.length > 0 && (
                     <>
                        <h4 className="mb-15">{t("svc.facilities")}</h4>
                        <ul className="mb-30">
                           {item.facilities.map((line, index) => (
                              <li key={index}>{tx(line, locale)}</li>
                           ))}
                        </ul>
                     </>
                  )}
                  {item.itinerary.length > 0 && (
                     <>
                        <h4 className="mb-15">{t("svc.itinerary")}</h4>
                        {item.itinerary.map((step) => (
                           <div key={step.day} className="mb-20">
                              <h5>
                                 {t("svc.days")} {step.day}: {tx(step.title, locale)}
                              </h5>
                              <p className="mb-0">{tx(step.text, locale)}</p>
                           </div>
                        ))}
                     </>
                  )}
                  {item.mapEmbed && (
                     <>
                        <h4 className="mb-15 mt-20">{t("svc.map")}</h4>
                        <iframe
                           title={t("svc.map")}
                           src={item.mapEmbed}
                           className="w-100 mb-30 tg-round-15"
                           height={280}
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        />
                     </>
                  )}
                  <h4 className="mb-10 mt-20">{t("svc.terms")}</h4>
                  <p>{tx(item.terms, locale)}</p>
                  <Link className="tg-btn mt-10" href={`/${service === "hajj" ? "hajj-umrah" : service === "hotel" ? "hotels" : "tours"}`}>
                     {t("home.seeAll")}
                  </Link>
               </div>
               <div className="col-lg-5 mb-40">
                  <div className="tg-contact-content-wrap">
                     <h3 className="mb-15">{t("svc.related")}</h3>
                     <Suspense>
                        <InquiryForm
                           defaultService={service}
                           defaultDestination={tx(item.title, locale)}
                           defaultPassengers="1"
                        />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PackageDetail;
