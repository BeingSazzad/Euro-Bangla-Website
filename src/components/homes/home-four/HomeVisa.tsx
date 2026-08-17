"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import { visaDestinations } from "@/data/visaDestinations";
import { tx } from "@/data/localized";
import { useT } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/locales";

const HOME_VISA_IDS = ["france", "uk", "canada", "usa", "germany"] as const;

const HomeVisa = () => {
   const { locale, t } = useT();
   const items = HOME_VISA_IDS.map((id) => visaDestinations.find((item) => item.id === id)).filter(
      (item): item is NonNullable<typeof item> => Boolean(item)
   );
   const [hero, ...rest] = items;

   if (!hero) return null;

   return (
      <section className="ebt-home-visa ebt-section">
         <div className="container">
            <div className="text-center mb-40">
               <h5 className="tg-section-subtitle mb-15">{t("home.visaSubtitle")}</h5>
               <h2 className="ebt-home-block-title mb-12">{t("home.visaTitle")}</h2>
               <p className="ebt-home-block-text mb-0">{t("home.visaText")}</p>
            </div>

            <div className="ebt-home-visa-mosaic">
               <VisaShot dest={hero} locale={locale} processingLabel={t("visaDetail.processingLabel")} featured />
               {rest.map((dest) => (
                  <VisaShot key={dest.id} dest={dest} locale={locale} processingLabel={t("visaDetail.processingLabel")} />
               ))}
            </div>

            <div className="ebt-home-visa-actions">
               <Link href="/visa" className="tg-btn tg-btn-switch-animation">
                  <Button text={t("home.visaCta")} />
               </Link>
               <Link href="/inquiry?service=visa" className="ebt-home-visa-secondary">
                  {t("home.visaInquire")}
               </Link>
            </div>
         </div>
      </section>
   );
};

const VisaShot = ({
   dest,
   locale,
   processingLabel,
   featured = false,
}: {
   dest: (typeof visaDestinations)[number];
   locale: Locale;
   processingLabel: string;
   featured?: boolean;
}) => {
   const name = tx(dest.name, locale);
   const href = `/visa/${dest.id}`;

   return (
      <Link
         href={href}
         className={`ebt-visa-shot${featured ? " ebt-visa-shot--hero" : ""}`}
         aria-label={name}
      >
         <Image
            src={dest.image}
            alt={name}
            fill
            sizes={featured ? "(max-width: 991px) 100vw, 42vw" : "(max-width: 991px) 50vw, 29vw"}
            className={`ebt-visa-shot-img ebt-visa-shot-img--${dest.id}`}
         />
         <span className="ebt-visa-shot-copy">
            <strong>{name}</strong>
            <span>
               {processingLabel} {tx(dest.processing, locale)}
            </span>
         </span>
      </Link>
   );
};

export default HomeVisa;
