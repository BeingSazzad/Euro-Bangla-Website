import Link from "next/link"
import { X } from "lucide-react"
import SiteLogo from "@/components/common/SiteLogo"
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useT } from "@/i18n/LanguageProvider";
import ContactInfoList from "@/components/common/ContactInfoList";
import { COMPANY } from "@/data/company";
import { ICON_SIZE, iconProps } from "@/data/icons";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/common/SocialIcons";

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
                        <X {...iconProps("md")} />
                     </button>
                  </div>
               </div>
               <div className="tgmobile__menu-outer">
                  <MobileMenu />
               </div>
               <div className="offCanvas__side-info mb-25">
                  <ContactInfoList />
               </div>
               <div className="social-links">
                  <ul className="list-wrap">
                     {Boolean(COMPANY.facebook) && (
                        <li>
                           <Link href={COMPANY.facebook} aria-label="Facebook">
                              <FacebookIcon size={ICON_SIZE.sm} />
                           </Link>
                        </li>
                     )}
                     {Boolean(COMPANY.instagram) && (
                        <li>
                           <Link href={COMPANY.instagram} aria-label="Instagram">
                              <InstagramIcon size={ICON_SIZE.sm} />
                           </Link>
                        </li>
                     )}
                     {Boolean(COMPANY.youtube) && (
                        <li>
                           <Link href={COMPANY.youtube} aria-label="YouTube">
                              <YoutubeIcon size={ICON_SIZE.sm} />
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
