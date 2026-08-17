"use client"
import Image, { type StaticImageData } from "next/image"
import Button from "@/components/common/Button"
import Link from "next/link"
import { useT } from "@/i18n/LanguageProvider"

import shape_1 from "@/assets/img/about/details/shape.png"
import shape_2 from "@/assets/img/about/details/shape-2.png"
import shape_4 from "@/assets/img/chose/chose-3/star.png"
import europe from "@/assets/img/destination/des.jpg"
import kaaba from "@/assets/img/chose/chose-2/thumb-2.jpg"
import madinah from "@/assets/img/destination/des-4.jpg"

const aboutPhotos: { image: StaticImageData; tall?: boolean }[] = [
   { image: europe },
   { image: kaaba },
   { image: madinah, tall: true },
];

const AboutArea = () => {
   const { t } = useT();
   const [leftTop, leftBottom, rightTall] = aboutPhotos;

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
                           <AboutPhoto image={leftTop.image} />
                           <AboutPhoto image={leftBottom.image} />
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
                           <AboutPhoto image={rightTall.image} tall />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="ebt-about-copy">
                     <div className="tg-chose-section-title">
                        <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">{t("about.subtitle")}</h5>
                        <h2 className="mb-20 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">{t("about.title")}</h2>
                        <p className="wow fadeInUp ebt-about-copy-text" data-wow-delay=".5s" data-wow-duration=".9s">{t("about.text")}</p>
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

const AboutPhoto = ({ image, tall = false }: { image: StaticImageData; tall?: boolean }) => (
   <div className={`ebt-about-card${tall ? " ebt-about-card--tall" : ""}`}>
      <Image src={image} alt="" sizes="(max-width: 768px) 50vw, 280px" />
   </div>
);

export default AboutArea
