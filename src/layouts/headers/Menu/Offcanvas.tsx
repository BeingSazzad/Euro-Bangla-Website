import Link from "next/link"
import { X } from "lucide-react"
import SiteLogo from "@/components/common/SiteLogo"
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useT } from "@/i18n/LanguageProvider";
import { COMPANY, whatsappLink } from "@/data/company";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "@/components/common/SocialIcons";

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {

   const [searchValue, setSearchValue] = useState("");
   const { t } = useT();

   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSearchValue('');
      setOffCanvas(false);
   };

   return (
      <div className={offCanvas ? "mobile-menu-visible" : ""}>
         <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
               <div onClick={() => setOffCanvas(false)} className="close-btn" role="button" aria-label="Close">
                  <X size={22} strokeWidth={1.75} aria-hidden="true" />
               </div>
               <div className="nav-logo d-flex align-items-center justify-content-between">
                  <Link href="/"><SiteLogo height={44} /></Link>
                  <LanguageSwitcher />
               </div>
               <div className="tgmobile__search">
                  <form onSubmit={handleSubmit}>
                     <input
                        type="text"
                        placeholder={t("header.searchHere")}
                        value={searchValue}
                        onChange={handleSearchChange}
                     />
                  </form>
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
