import Link from "next/link"
import { X } from "lucide-react"
import SiteLogo from "@/components/common/SiteLogo"
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useT } from "@/i18n/LanguageProvider";
import { COMPANY, whatsappLink } from "@/data/company";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "@/components/common/SocialIcons";

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
   const { t } = useT();

   return (
      <div className={offCanvas ? "mobile-menu-visible" : ""}>
         <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
               <div className="ebt-mobile-head">
                  <Link href="/" onClick={() => setOffCanvas(false)}>
                     <SiteLogo height={40} />
                  </Link>
                  <div className="ebt-mobile-head-actions">
                     <LanguageSwitcher />
                     <button
                        type="button"
                        className="ebt-mobile-close"
                        onClick={() => setOffCanvas(false)}
                        aria-label={t("header.close")}
                     >
                        <X size={20} strokeWidth={2} aria-hidden="true" />
                     </button>
                  </div>
               </div>
               <div className="tgmobile__menu-outer">
                  <MobileMenu />
               </div>
               <div className="offCanvas__side-info mb-25">
                  <div className="contact-list mb-20">
                     <h4>{t("header.officeAddress")}</h4>
                     <p>
                        <Link href={COMPANY.mapLink} target="_blank" rel="noopener noreferrer">
                           {COMPANY.addressLine1}<br />
                           {COMPANY.addressLine2}
                        </Link>
                     </p>
                  </div>
                  <div className="contact-list mb-20">
                     <h4>{t("header.phoneNumber")}</h4>
                     <p><Link href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</Link></p>
                     <p>
                        <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                           WhatsApp: {COMPANY.phone}
                        </Link>
                     </p>
                  </div>
                  <div className="contact-list mb-20">
                     <h4>{t("header.emailAddress")}</h4>
                     <p><Link href={`mailto:${COMPANY.email}`}>{COMPANY.email}</Link></p>
                  </div>
               </div>
               <div className="social-links">
                  <ul className="list-wrap">
                     <li>
                        <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                           <WhatsAppIcon size={16} />
                        </Link>
                     </li>
                     {COMPANY.facebook !== "#" && (
                        <li>
                           <Link href={COMPANY.facebook} aria-label="Facebook">
                              <FacebookIcon size={16} />
                           </Link>
                        </li>
                     )}
                     {COMPANY.instagram !== "#" && (
                        <li>
                           <Link href={COMPANY.instagram} aria-label="Instagram">
                              <InstagramIcon size={16} />
                           </Link>
                        </li>
                     )}
                     {COMPANY.youtube !== "#" && (
                        <li>
                           <Link href={COMPANY.youtube} aria-label="YouTube">
                              <YoutubeIcon size={16} />
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
            </nav>
         </div>
         <div onClick={() => setOffCanvas(false)} className="tgmobile__menu-backdrop"></div>
      </div>
   )
}

export default Offcanvas
