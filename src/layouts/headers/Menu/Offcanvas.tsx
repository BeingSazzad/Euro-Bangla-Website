import Link from "next/link"
import SiteLogo from "@/components/common/SiteLogo"
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useT } from "@/i18n/LanguageProvider";

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
               <div onClick={() => setOffCanvas(false)} className="close-btn"><i className="fa-solid fa-xmark"></i></div>
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
               <div className="social-links">
                  <ul className="list-wrap">
                     <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                  </ul>
               </div>
            </nav>
         </div>
         <div onClick={() => setOffCanvas(false)} className="tgmobile__menu-backdrop"></div>
      </div>
   )
}

export default Offcanvas
