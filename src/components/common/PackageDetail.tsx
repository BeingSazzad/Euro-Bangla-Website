"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Check, Clock3, Languages, MapPin, Users } from "lucide-react";
import type { PackageItem } from "@/data/services";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import InquiryForm from "@/components/forms/InquiryForm";

const uniquePhotos = (item: PackageItem): StaticImageData[] => {
   const seen = new Set<string>();
   return [item.thumb, ...(item.gallery ?? [])].filter((img) => {
      if (seen.has(img.src)) return false;
      seen.add(img.src);
      return true;
   });
};

const listingHref = (service: string) => {
   if (service === "hajj") return "/hajj-umrah";
   if (service === "hotel") return "/hotels";
   return "/tours";
};

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
   const title = tx(item.title, locale);
   const location = tx(item.location, locale);
   const photos = uniquePhotos(item);
   const highlights = item.highlights?.length ? item.highlights : item.includes.slice(0, 4);
   const styleLabel =
      item.category === "family"
         ? t("svc.family")
         : item.category === "honeymoon"
            ? t("svc.honeymoon")
            : item.category === "group"
               ? t("svc.smallGroup")
               : service === "hotel"
                  ? t("inquiry.services.hotel")
                  : t("svc.group");
   const durationLabel = `${item.days} ${t("svc.days")}`;

   return (
      <div className="tg-tour-about-area ebt-pkg-details">
         <div className="container">
            <div className="ebt-pkg-head">
               <div>
                  {item.tag && <span className="ebt-pkg-badge">{tx(item.tag, locale)}</span>}
                  <h1 className="ebt-pkg-title">{title}</h1>
                  <p className="ebt-pkg-location">
                     <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
                     {location}
                     {item.hotelName ? ` · ${tx(item.hotelName, locale)}` : ""}
                  </p>
               </div>
               <div className="ebt-pkg-price-block">
                  <span className="ebt-pkg-price-label">{t("svc.from")}</span>
                  <strong>{item.price.toLocaleString("en-US")}</strong>
                  <span>{priceSuffix}</span>
               </div>
            </div>

            {photos.length > 0 && (
               <div className={`ebt-pkg-gallery ebt-pkg-gallery--${Math.min(photos.length, 3)}`}>
                  {photos.slice(0, 4).map((img, index) => (
                     <div key={img.src} className={`ebt-pkg-gallery-item${index === 0 ? " is-hero" : ""}`}>
                        <Image
                           src={img}
                           alt={`${title} ${index + 1}`}
                           sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 30vw"}
                        />
                     </div>
                  ))}
               </div>
            )}

            <div className="ebt-pkg-meta">
               <ul>
                  <li>
                     <div className="ebt-pkg-meta-icon" aria-hidden="true">
                        <Clock3 size={18} strokeWidth={1.75} />
                     </div>
                     <div>
                        <span>{t("svc.duration")}</span>
                        <strong>{durationLabel}</strong>
                     </div>
                  </li>
                  <li>
                     <div className="ebt-pkg-meta-icon" aria-hidden="true">
                        <MapPin size={18} strokeWidth={1.75} />
                     </div>
                     <div>
                        <span>{t("svc.destination")}</span>
                        <strong>{location}</strong>
                     </div>
                  </li>
                  <li>
                     <div className="ebt-pkg-meta-icon" aria-hidden="true">
                        <Users size={18} strokeWidth={1.75} />
                     </div>
                     <div>
                        <span>{t("svc.style")}</span>
                        <strong>{styleLabel}</strong>
                     </div>
                  </li>
                  <li>
                     <div className="ebt-pkg-meta-icon" aria-hidden="true">
                        <Languages size={18} strokeWidth={1.75} />
                     </div>
                     <div>
                        <span>{t("svc.languages")}</span>
                        <strong>EN · BN · FR</strong>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="row ebt-pkg-body">
               <div className="col-lg-8">
                  <section className="ebt-pkg-section">
                     <h2>{t("svc.aboutPackage")}</h2>
                     <p>{tx(item.summary, locale)}</p>
                  </section>

                  {highlights.length > 0 && (
                     <section className="ebt-pkg-section">
                        <h2>{t("svc.highlights")}</h2>
                        <ul className="ebt-pkg-highlights">
                           {highlights.map((line, index) => (
                              <li key={index}>
                                 <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                                 <span>{tx(line, locale)}</span>
                              </li>
                           ))}
                        </ul>
                     </section>
                  )}

                  <section className="ebt-pkg-section">
                     <h2>{t("svc.includes")} / {t("svc.excludes")}</h2>
                     <div className="row">
                        <div className="col-md-6">
                           <ul className="ebt-pkg-list is-in">
                              {item.includes.map((line, index) => (
                                 <li key={index}>
                                    <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                                    {tx(line, locale)}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="col-md-6">
                           <ul className="ebt-pkg-list is-out">
                              {item.excludes.map((line, index) => (
                                 <li key={index}>
                                    <X size={15} strokeWidth={2.4} aria-hidden="true" />
                                    {tx(line, locale)}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </section>

                  {item.facilities && item.facilities.length > 0 && (
                     <section className="ebt-pkg-section">
                        <h2>{t("svc.facilities")}</h2>
                        <ul className="ebt-pkg-highlights">
                           {item.facilities.map((line, index) => (
                              <li key={index}>
                                 <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                                 <span>{tx(line, locale)}</span>
                              </li>
                           ))}
                        </ul>
                     </section>
                  )}

                  {item.itinerary.length > 0 && (
                     <section className="ebt-pkg-section">
                        <h2>{t("svc.itinerary")}</h2>
                        <ol className="ebt-pkg-itinerary">
                           {item.itinerary.map((step) => (
                              <li key={step.day}>
                                 <span className="ebt-pkg-day">{t("svc.days")} {step.day}</span>
                                 <div>
                                    <h3>{tx(step.title, locale)}</h3>
                                    <p>{tx(step.text, locale)}</p>
                                 </div>
                              </li>
                           ))}
                        </ol>
                     </section>
                  )}

                  {item.mapEmbed && (
                     <section className="ebt-pkg-section">
                        <h2>{t("svc.map")}</h2>
                        <iframe
                           title={t("svc.map")}
                           src={item.mapEmbed}
                           className="w-100 ebt-pkg-map"
                           height={280}
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        />
                     </section>
                  )}

                  <section className="ebt-pkg-section ebt-pkg-terms">
                     <h2>{t("svc.terms")}</h2>
                     <p>{tx(item.terms, locale)}</p>
                     <Link className="tg-btn" href={listingHref(service)}>
                        {t("home.seeAll")}
                     </Link>
                  </section>
               </div>

               <div className="col-lg-4">
                  <aside className="ebt-pkg-side">
                     <h2>{t("svc.bookPackage")}</h2>
                     <p className="ebt-pkg-side-text">{t("svc.related")}</p>
                     <div className="ebt-pkg-side-price">
                        {t("svc.from")} <strong>{item.price.toLocaleString("en-US")}</strong>
                        {priceSuffix}
                     </div>
                     <Suspense>
                        <InquiryForm
                           compact
                           defaultService={service === "hajj" ? "hajj" : service === "hotel" ? "hotel" : "tour"}
                           defaultDestination={title}
                           defaultPassengers="1"
                        />
                     </Suspense>
                  </aside>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PackageDetail;
