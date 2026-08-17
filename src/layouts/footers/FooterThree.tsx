"use client"
import { FormEvent, useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/common/SocialIcons"
import SiteLogo from "@/components/common/SiteLogo"
import { useT } from "@/i18n/LanguageProvider"
import { COMPANY } from "@/data/company"
import { ICON_SIZE, iconProps } from "@/data/icons"

const FooterThree = () => {
   const { t } = useT();
   const [newsNote, setNewsNote] = useState("");

   const onNewsletter = (e: FormEvent) => {
      e.preventDefault();
      setNewsNote(t("footer.newsletterSoon"));
   };

   return (
      <>
         <footer>
            <div className="tg-footer-area ebt-footer include-bg" style={{ backgroundImage: `url(/assets/img/footer/footer.jpg)` }}>
               <div className="container">
                  <div className="tg-footer-top mb-40">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget mb-40">
                              <div className="tg-footer-logo mb-20">
                                 <Link href="/"><SiteLogo variant="white" /></Link>
                              </div>
                              <p className="mb-20">{t("footer.about")}</p>
                              <div className="tg-footer-form mb-30">
                                 <form onSubmit={onNewsletter}>
                                    <input type="email" placeholder={t("footer.emailPlaceholder")} />
                                    <button className="tg-footer-form-btn" type="submit" aria-label="Submit">
                                       <ArrowRight {...iconProps("md")} color="white" />
                                    </button>
                                 </form>
                                 {newsNote && <p className="mt-10 mb-0">{newsNote}</p>}
                              </div>
                              {(COMPANY.facebook !== "#" || COMPANY.instagram !== "#" || COMPANY.youtube !== "#") && (
                                 <div className="tg-footer-social">
                                    {COMPANY.facebook !== "#" && (
                                       <Link href={COMPANY.facebook} aria-label="Facebook">
                                          <FacebookIcon size={ICON_SIZE.sm} />
                                       </Link>
                                    )}
                                    {COMPANY.instagram !== "#" && (
                                       <Link href={COMPANY.instagram} aria-label="Instagram">
                                          <InstagramIcon size={ICON_SIZE.sm} />
                                       </Link>
                                    )}
                                    {COMPANY.youtube !== "#" && (
                                       <Link href={COMPANY.youtube} aria-label="YouTube">
                                          <YoutubeIcon size={ICON_SIZE.sm} />
                                       </Link>
                                    )}
                                 </div>
                              )}
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-link ebt-footer-links mb-40">
                              <h3 className="tg-footer-widget-title mb-25">{t("footer.quickLinks")}</h3>
                              <ul>
                                 <li><Link href="/">{t("footer.home")}</Link></li>
                                 <li><Link href="/hajj-umrah">{t("footer.hajj")}</Link></li>
                                 <li><Link href="/tours">{t("footer.tours")}</Link></li>
                                 <li><Link href="/hotels">{t("footer.hotels")}</Link></li>
                                 <li><Link href="/visa">{t("footer.visa")}</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-info mb-40">
                              <h3 className="tg-footer-widget-title mb-25">{t("footer.information")}</h3>
                              <ul>
                                 <li>
                                    <Link className="d-flex" href={COMPANY.mapLink}>
                                       <span className="mr-15">
                                          <MapPin {...iconProps("md")} color="white" />
                                       </span>
                                       {COMPANY.address}
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="d-flex" href={`tel:${COMPANY.phoneTel}`}>
                                       <span className="mr-15">
                                          <Phone {...iconProps("md")} color="white" />
                                       </span>
                                       {COMPANY.phone}
                                    </Link>
                                 </li>
                                 <li className="d-flex">
                                    <span className="mr-15">
                                       <Clock {...iconProps("md")} color="white" />
                                    </span>
                                    <p className="mb-0">
                                       {t("footer.hours")}<br />
                                       {t("footer.sunday")} <span className="text-white d-inline-block">{t("footer.closed")}</span>
                                    </p>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-link mb-40">
                              <h3 className="tg-footer-widget-title mb-25">{t("footer.help")}</h3>
                              <ul>
                                 <li><Link href="/about">{t("nav.about")}</Link></li>
                                 <li><Link href="/blog">{t("page.blog")}</Link></li>
                                 <li><Link href="/faq">{t("footer.faq")}</Link></li>
                                 <li><Link href="/privacy">{t("footer.privacy")}</Link></li>
                                 <li><Link href="/terms">{t("footer.terms")}</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tg-footer-copyright">
                  <div className="container">
                     <div className="ebt-footer-copy">
                        <span>© {new Date().getFullYear()} Euro Bangla Travels</span>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default FooterThree
