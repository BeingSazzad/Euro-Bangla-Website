"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Clock3, Headset, ShieldCheck } from "lucide-react";
import InnerHeader from "@/layouts/headers/InnerHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import { findVisa } from "@/data/services";
import { visaDestinations } from "@/data/visaDestinations";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";

import ctaImage from "@/assets/img/visa/cta.jpg";

const whyItems = [
   {
      id: 1,
      tone: "lime",
      icon: BadgeCheck,
      titleKey: "visaDetail.why1Title",
      textKey: "visaDetail.why1Text",
   },
   {
      id: 2,
      tone: "gray",
      icon: Clock3,
      titleKey: "visaDetail.why2Title",
      textKey: "visaDetail.why2Text",
   },
   {
      id: 3,
      tone: "sky",
      icon: ShieldCheck,
      titleKey: "visaDetail.why3Title",
      textKey: "visaDetail.why3Text",
   },
   {
      id: 4,
      tone: "mint",
      icon: Headset,
      titleKey: "visaDetail.why4Title",
      textKey: "visaDetail.why4Text",
   },
] as const;

const VisaDetailsPage = ({ slug }: { slug: string }) => {
   const { locale, t } = useT();
   const item = findVisa(slug);
   if (!item) notFound();

   const title = tx(item.title, locale);

   return (
      <>
         <InnerHeader />
         <main>
            <BreadCrumb title={title} sub_title={title} raw />

            <section className="ebt-visa-dest ebt-page-content">
               <div className="container">
                  <div className="ebt-visa-dest-head text-center mb-50">
                     <h2 className="ebt-visa-dest-title mb-12">{t("visaDetail.packagesTitle")}</h2>
                     <p className="ebt-visa-dest-text mb-0">{tx(item.summary, locale)}</p>
                  </div>

                  <div className="row justify-content-center">
                     {visaDestinations.map((dest) => (
                        <div key={dest.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <Link
                              href={`/inquiry?service=visa&destination=${encodeURIComponent(tx(dest.name, locale))}&message=${encodeURIComponent(title)}`}
                              className="ebt-visa-country"
                           >
                              <div className="ebt-visa-country-media">
                                 <Image
                                    src={dest.image}
                                    alt={tx(dest.name, locale)}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                 />
                              </div>
                              <div className="ebt-visa-country-body">
                                 <h3 className="ebt-visa-country-name">{tx(dest.name, locale)}</h3>
                                 <p className="ebt-visa-country-meta mb-0">
                                    {t("visaDetail.processingLabel")}{" "}
                                    <span>{tx(dest.processing, locale)}</span>
                                 </p>
                              </div>
                           </Link>
                        </div>
                     ))}
                  </div>

                  <div className="ebt-visa-docs mt-60">
                     <div className="row">
                        <div className="col-lg-6 mb-30">
                           <h3 className="mb-15">{t("svc.documents")}</h3>
                           <ul className="ebt-visa-doc-list">
                              {item.documents.map((doc, index) => (
                                 <li key={index}>{tx(doc, locale)}</li>
                              ))}
                           </ul>
                        </div>
                        <div className="col-lg-6 mb-30">
                           <h3 className="mb-15">{t("svc.processing")}</h3>
                           <p className="mb-20">{tx(item.processing, locale)}</p>
                           <p className="mb-0">
                              <strong>{t("svc.destinations")}:</strong> {tx(item.destinations, locale)}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="ebt-visa-why">
               <div className="container">
                  <div className="text-center mb-45">
                     <h5 className="tg-section-subtitle mb-15">{t("visaDetail.whyEyebrow")}</h5>
                     <h2 className="ebt-visa-why-title mb-0">{t("visaDetail.whyTitle")}</h2>
                  </div>
                  <div className="row">
                     {whyItems.map((why) => {
                        const Icon = why.icon;
                        return (
                           <div key={why.id} className="col-lg-3 col-md-6 mb-25">
                              <div className={`ebt-visa-why-card ebt-visa-why-card--${why.tone}`}>
                                 <span className="ebt-visa-why-icon" aria-hidden="true">
                                    <Icon size={28} strokeWidth={1.75} />
                                 </span>
                                 <h3 className="ebt-visa-why-card-title">{t(why.titleKey)}</h3>
                                 <p className="ebt-visa-why-card-text mb-0">{t(why.textKey)}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </section>

            <section className="ebt-visa-cta ebt-section">
               <div className="container">
                  <div className="ebt-visa-cta-box">
                     <div className="row align-items-center">
                        <div className="col-lg-6 mb-30 mb-lg-0">
                           <h5 className="tg-section-subtitle mb-15">{t("visaDetail.ctaEyebrow")}</h5>
                           <h2 className="ebt-visa-cta-title mb-20">{t("visaDetail.ctaTitle")}</h2>
                           <p className="ebt-visa-cta-text mb-30">{t("visaDetail.ctaText")}</p>
                           <Link
                              className="tg-btn"
                              href={`/inquiry?service=visa&destination=${encodeURIComponent(title)}`}
                           >
                              {t("visaDetail.ctaButton")}
                           </Link>
                        </div>
                        <div className="col-lg-6">
                           <div className="ebt-visa-cta-media">
                              <Image src={ctaImage} alt="" fill sizes="(max-width: 992px) 100vw, 50vw" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <FooterThree />
      </>
   );
};

export default VisaDetailsPage;
