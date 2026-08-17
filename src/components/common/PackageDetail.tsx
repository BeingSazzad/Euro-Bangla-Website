"use client";

import { Suspense } from "react";
import Image, { type StaticImageData } from "next/image";
import { Check, Clock3, Globe, Info, MapPin, X } from "lucide-react";
import type { PackageItem } from "@/data/services";
import { iconProps } from "@/data/icons";
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

const Mosaic = ({ photos, title }: { photos: StaticImageData[]; title: string }) => {
   if (photos.length === 0) return null;

   const frame = (src: StaticImageData, alt: string, size: "hero" | "mid" | "sm", sizes: string) => (
      <div className={`tg-tour-details-video-thumb ebt-tour-mosaic-${size} mb-15`}>
         <Image src={src} alt={alt} fill sizes={sizes} />
      </div>
   );

   if (photos.length === 1) {
      return (
         <div className="row gx-15 mb-25">
            <div className="col-12">{frame(photos[0], title, "hero", "100vw")}</div>
         </div>
      );
   }

   if (photos.length === 2) {
      return (
         <div className="row gx-15 mb-25">
            <div className="col-lg-7">{frame(photos[0], `${title} 1`, "hero", "(max-width: 991px) 100vw, 58vw")}</div>
            <div className="col-lg-5">{frame(photos[1], `${title} 2`, "hero", "(max-width: 991px) 100vw, 42vw")}</div>
         </div>
      );
   }

   return (
      <div className="row gx-15 mb-25">
         <div className="col-lg-7">{frame(photos[0], `${title} 1`, "hero", "(max-width: 991px) 100vw, 58vw")}</div>
         <div className="col-lg-5">
            <div className="row gx-15">
               <div className="col-12">{frame(photos[1], `${title} 2`, "mid", "(max-width: 991px) 100vw, 42vw")}</div>
               <div className={photos[3] ? "col-lg-6 col-md-6" : "col-12"}>
                  {frame(photos[2], `${title} 3`, "sm", "(max-width: 991px) 50vw, 21vw")}
               </div>
               {photos[3] && (
                  <div className="col-lg-6 col-md-6">
                     {frame(photos[3], `${title} 4`, "sm", "(max-width: 991px) 50vw, 21vw")}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
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
   const highlights = item.highlights ?? [];
   const facilities = item.facilities ?? [];
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
   const priceLabel = item.price.toLocaleString("en-US");
   const inquiryService = service === "hajj" ? "hajj" : service === "hotel" ? "hotel" : "tour";
   const featureItems = [
      { key: "duration", icon: Clock3, label: t("svc.duration"), value: durationLabel },
      { key: "type", icon: Globe, label: t("svc.type"), value: styleLabel },
      { key: "place", icon: MapPin, label: t("svc.destination"), value: location },
   ];

   return (
      <div className="ebt-tour-details">
         <div className="tg-tour-details-area pt-35 pb-25">
            <div className="container">
               <div className="row align-items-end mb-35">
                  <div className="col-xl-8 col-lg-8">
                     <div className="tg-tour-details-video-title-wrap">
                        <h1 className="tg-tour-details-video-title mb-15">{title}</h1>
                     </div>
                  </div>
               </div>

               <Mosaic photos={photos} title={title} />

               <div className="tg-tour-details-feature-list-wrap">
                  <div className="row align-items-center">
                     <div className="col-lg-8">
                        <div className="tg-tour-details-video-feature-list">
                           <ul>
                              {featureItems.map((feature) => {
                                 const Icon = feature.icon;
                                 return (
                                    <li key={feature.key}>
                                       <span className="icon">
                                          <Icon {...iconProps("sm")} />
                                       </span>
                                       <div>
                                          <span className="title">{feature.label}</span>
                                          <span className="duration">{feature.value}</span>
                                       </div>
                                    </li>
                                 );
                              })}
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="tg-tour-details-video-feature-price mb-15">
                           <p>
                              {t("svc.from")} <span>{priceLabel}</span>
                              {priceSuffix}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="tg-tour-about-area tg-tour-about-border pt-40 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="tg-tour-about-wrap mr-55">
                        <div className="tg-tour-about-content">
                           <div className="tg-tour-about-inner mb-25">
                              <h2 className="tg-tour-about-title mb-15">{t("svc.aboutPackage")}</h2>
                              <p className="lh-28">{tx(item.summary, locale)}</p>
                           </div>

                           {highlights.length > 0 && (
                              <div className="tg-tour-about-inner mb-40">
                                 <h2 className="tg-tour-about-title mb-20">{t("svc.highlights")}</h2>
                                 <div className="tg-tour-about-list">
                                    <ul>
                                       {highlights.map((line, index) => (
                                          <li key={index}>
                                             <span className="icon mr-10">
                                                <Check {...iconProps("sm")} />
                                             </span>
                                             <span className="text">{tx(line, locale)}</span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           )}

                           <div className="tg-tour-about-border mb-40"></div>

                           <div className="tg-tour-about-inner mb-40">
                              <h2 className="tg-tour-about-title mb-20">{t("svc.included")}</h2>
                              <div className="tg-tour-about-list tg-tour-about-list-2">
                                 <ul>
                                    {item.includes.map((line, index) => (
                                       <li key={index}>
                                          <span className="icon mr-10">
                                             <Check {...iconProps("sm")} />
                                          </span>
                                          <span className="text">{tx(line, locale)}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>

                           <div className="tg-tour-about-border mb-40"></div>

                           <div className="tg-tour-about-inner mb-40">
                              <h2 className="tg-tour-about-title mb-20">{t("svc.notIncluded")}</h2>
                              <div className="tg-tour-about-list tg-tour-about-list-2 disable">
                                 <ul>
                                    {item.excludes.map((line, index) => (
                                       <li key={index}>
                                          <span className="icon mr-10">
                                             <X {...iconProps("sm")} />
                                          </span>
                                          <span className="text">{tx(line, locale)}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>

                           {facilities.length > 0 && (
                              <>
                                 <div className="tg-tour-about-border mb-40"></div>
                                 <div className="tg-tour-about-inner mb-40">
                                    <h2 className="tg-tour-about-title mb-20">{t("svc.facilities")}</h2>
                                    <div className="row">
                                       {[0, 1, 2].map((col) => {
                                          const colItems = facilities.filter((_, index) => index % 3 === col);
                                          if (colItems.length === 0) return null;
                                          return (
                                             <div key={col} className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="tg-tour-about-list tg-tour-about-list-2">
                                                   <ul>
                                                      {colItems.map((line, index) => (
                                                         <li key={index}>
                                                            <span className="icon mr-10">
                                                               <Check {...iconProps("sm")} />
                                                            </span>
                                                            <span className="text">{tx(line, locale)}</span>
                                                         </li>
                                                      ))}
                                                   </ul>
                                                </div>
                                             </div>
                                          );
                                       })}
                                    </div>
                                 </div>
                              </>
                           )}

                           {item.mapEmbed && (
                              <>
                                 <div className="tg-tour-about-border mb-45"></div>
                                 <div className="tg-tour-about-map mb-40">
                                    <h2 className="tg-tour-about-title mb-15">{t("svc.map")}</h2>
                                    <div className="tg-tour-about-map h-100">
                                       <iframe
                                          title={t("svc.map")}
                                          src={item.mapEmbed}
                                          width="600"
                                          height="450"
                                          style={{ border: 0 }}
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"
                                       />
                                    </div>
                                 </div>
                              </>
                           )}

                           <div className="tg-tour-about-border mb-45"></div>
                           <aside className="ebt-tour-notice" role="note">
                              <div className="ebt-tour-notice__label">
                                 <Info {...iconProps("sm")} />
                                 <span>{t("svc.goodToKnow")}</span>
                              </div>
                              <p className="ebt-tour-notice__body">{tx(item.terms, locale)}</p>
                           </aside>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-4">
                     <div className="tg-tour-about-sidebar top-sticky mb-50">
                        <h2 className="tg-tour-about-title title-2 mb-15">{t("svc.bookPackage")}</h2>
                        <Suspense>
                           <InquiryForm
                              compact
                              locked
                              defaultService={inquiryService}
                              defaultDestination={title}
                           />
                        </Suspense>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PackageDetail;
