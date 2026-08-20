"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { EbtButtonLink } from "@/components/common/EbtButton"
import { iconProps } from "@/data/icons"
import { useT } from "@/i18n/LanguageProvider"

const Cta = () => {
   const { t } = useT();

   return (
      <section className="ebt-about-cta">
         <div className="ebt-about-cta-media">
            <Image
               src="/assets/img/banner/banner-4/banner-4.png"
               alt="Euro Bangla Travels"
               fill
               sizes="100vw"
            />
         </div>
         <div className="ebt-about-cta-fade" aria-hidden="true" />
         <div className="ebt-about-cta-shade" aria-hidden="true" />
         <div className="container">
            <div className="ebt-about-cta-inner">
               <p className="ebt-about-cta-kicker">{t("about.ctaSubtitle")}</p>
               <h2 className="ebt-about-cta-title">{t("about.ctaTitle")}</h2>
               <p className="ebt-about-cta-text">{t("about.ctaText")}</p>
               <EbtButtonLink href="/inquiry" variant="on-brand" size="lg">
                  {t("about.bookTrip")}
                  <ArrowRight {...iconProps("sm")} />
               </EbtButtonLink>
            </div>
         </div>
      </section>
   )
}

export default Cta
