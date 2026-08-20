"use client"
import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import SiteLogo from "@/components/common/SiteLogo"
import ContactInfoList from "@/components/common/ContactInfoList"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/common/SocialIcons"
import { COMPANY } from "@/data/company"
import { ICON_SIZE, iconProps } from "@/data/icons"
import { useT } from "@/i18n/LanguageProvider"

interface SidebarProps {
   sidebar: boolean;
   setSidebar: (offCanvas: boolean) => void;
}

const Sidebar = ({ sidebar, setSidebar }: SidebarProps) => {
   const { t } = useT();

   useEffect(() => {
      document.body.style.overflow = sidebar ? "hidden" : "";
      const onKey = (event: KeyboardEvent) => {
         if (event.key === "Escape") setSidebar(false);
      };
      if (sidebar) window.addEventListener("keydown", onKey);
      return () => {
         document.body.style.overflow = "";
         window.removeEventListener("keydown", onKey);
      };
   }, [sidebar, setSidebar]);

   const close = () => setSidebar(false);

   return (
      <>
         <div className={`offCanvas__info ${sidebar ? "active" : ""}`} role="dialog" aria-modal="true" aria-label={t("header.contactInfo")}>
            <div className="offCanvas__close-icon menu-close">
               <button type="button" onClick={close} aria-label={t("header.close")}>
                  <X {...iconProps("md")} />
               </button>
            </div>
            <div className="offCanvas__logo mb-30">
               <Link href="/" onClick={close}><SiteLogo height={40} /></Link>
            </div>
            <div className="offCanvas__side-info mb-30">
               <ContactInfoList />
            </div>
            <div className="offCanvas__social-icon mt-30">
               {Boolean(COMPANY.facebook) && (
                  <Link href={COMPANY.facebook} aria-label="Facebook">
                     <FacebookIcon size={ICON_SIZE.sm} />
                  </Link>
               )}
               {Boolean(COMPANY.instagram) && (
                  <Link href={COMPANY.instagram} aria-label="Instagram">
                     <InstagramIcon size={ICON_SIZE.sm} />
                  </Link>
               )}
               {Boolean(COMPANY.youtube) && (
                  <Link href={COMPANY.youtube} aria-label="YouTube">
                     <YoutubeIcon size={ICON_SIZE.sm} />
                  </Link>
               )}
            </div>
         </div>
         <div onClick={close} className={`offCanvas__overly ${sidebar ? "active" : ""}`} />
      </>
   )
}

export default Sidebar
