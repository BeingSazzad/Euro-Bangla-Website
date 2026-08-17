"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Clock3, Headset, ShieldCheck } from "lucide-react";
import Button from "@/components/common/Button";
import { iconProps } from "@/data/icons";
import { visaTypes } from "@/data/services";
import { visaDestinations } from "@/data/visaDestinations";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import ctaImage from "@/assets/img/visa/cta.jpg";

const whyItems = [
   {
      id: 1,
      tone: "sand",
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

export const VisaCountryGrid = ({ visaTypeTitle }: { visaTypeTitle?: string }) => {
   const { locale, t } = useT();

   return (
      <div className="row justify-content-center ebt-visa-country-grid">
         {visaDestinations.map((dest) => {
            const name = tx(dest.name, locale);
            const params = new URLSearchParams({ service: "visa", destination: name });
            if (visaTypeTitle) params.set("message", visaTypeTitle);

            return (
               <div key={dest.id} className="col-6 col-md-4 col-lg-3 ebt-visa-country-col">
                  <Link href={`/inquiry?${params.toString()}`} className="ebt-visa-country">
                     <div className="ebt-visa-country-media">
                        <Image src={dest.image} alt={name} fill sizes="(max-width: 768px) 50vw, 25vw" />
                     </div>
                     <div className="ebt-visa-country-body">
                        <h3 className="ebt-visa-country-name">{name}</h3>
                        <p className="ebt-visa-country-meta mb-0">
                           {t("visaDetail.processingLabel")} <span>{tx(dest.processing, locale)}</span>
                        </p>
                     </div>
                  </Link>
               </div>
            );
         })}
      </div>
   );
};

export const VisaTypeStrip = () => {
   const { locale, t } = useT();

   return (
      <div className="ebt-visa-types">
         <h3 className="ebt-visa-types-title">{t("visaDetail.typesTitle")}</h3>
         <p className="ebt-visa-types-text">{t("visaDetail.typesText")}</p>
         <div className="ebt-visa-type-chips">
            {visaTypes.map((item) => (
               <Link key={item.slug} href={`/visa/${item.slug}`} className="ebt-visa-type-chip">
                  {tx(item.title, locale)}
               </Link>
            ))}
         </div>
      </div>
   );
};

export const VisaWhy = () => {
   const { t } = useT();

   return (
      <section className="ebt-visa-why">
         <div className="container">
            <div className="text-center mb-45">
               <h5 className="tg-section-subtitle mb-15">{t("visaDetail.whyEyebrow")}</h5>
               <h2 className="ebt-visa-why-title mb-0">{t("visaDetail.whyTitle")}</h2>
            </div>
            <div className="row align-items-stretch">
               {whyItems.map((why) => {
                  const Icon = why.icon;
                  return (
                     <div key={why.id} className="col-lg-3 col-md-6 mb-25 d-flex">
                        <div className={`ebt-visa-why-card ebt-visa-why-card--${why.tone}`}>
                           <span className="ebt-visa-why-icon" aria-hidden="true">
                              <Icon {...iconProps("lg")} />
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
   );
};

export const VisaCta = ({ destination }: { destination?: string }) => {
   const { t } = useT();
   const href = destination
      ? `/inquiry?service=visa&destination=${encodeURIComponent(destination)}`
      : "/inquiry?service=visa";

   return (
      <section className="ebt-visa-cta ebt-section">
         <div className="container">
            <div className="ebt-visa-cta-box">
               <div className="row align-items-center">
                  <div className="col-lg-6 mb-30 mb-lg-0">
                     <h5 className="tg-section-subtitle mb-15">{t("visaDetail.ctaEyebrow")}</h5>
                     <h2 className="ebt-visa-cta-title mb-20">{t("visaDetail.ctaTitle")}</h2>
                     <p className="ebt-visa-cta-text mb-30">{t("visaDetail.ctaText")}</p>
                     <Link href={href} className="tg-btn tg-btn-switch-animation">
                        <Button text={t("visaDetail.ctaButton")} />
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
   );
};
