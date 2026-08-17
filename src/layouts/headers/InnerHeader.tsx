"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import Sidebar from "./Menu/Sidebar";
import SiteLogo from "@/components/common/SiteLogo";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import HeaderWhatsApp from "@/components/common/HeaderWhatsApp";
import { useT } from "@/i18n/LanguageProvider";

const InnerHeader = () => {
   const { sticky } = UseSticky();
   const { t } = useT();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [sidebar, setSidebar] = useState<boolean>(false);

   return (
      <>
         <header className="tg-header-height">
            <div className="tg-header__area">
               <div className={`tg-header-4-bootom tg-header-lg-space ${sticky ? "header-sticky" : ""}`} id="header-sticky">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-lg-8 col-5">
                           <div className="tgmenu__wrap d-flex align-items-center">
                              <div className="logo flex-auto">
                                 <Link href="/"><SiteLogo priority /></Link>
                              </div>
                              <nav className="tgmenu__nav ml-90 d-none d-xl-block">
                                 <div className="tgmenu__navbar-wrap tgmenu__main-menu tgmenu__navbar-wrap-4 d-none d-xl-flex">
                                    <NavMenu />
                                 </div>
                              </nav>
                           </div>
                        </div>
                        <div className="col-lg-4 col-7">
                           <div className="tg-menu-right-action tg-menu-right-action-3 tg-menu-4-right-action d-flex align-items-center justify-content-end">
                              <LanguageSwitcher />
                              <HeaderWhatsApp className="ml-15 d-none d-xl-flex" />
                              <div className="tg-header-menu-bar lh-1 p-relative ml-10 d-none d-xl-block">
                                 <button
                                    type="button"
                                    onClick={() => setSidebar(true)}
                                    className="tgmenu-offcanvas-open-btn menu-tigger"
                                    aria-label={t("header.contactInfo")}
                                 >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                 </button>
                              </div>
                              <div className="tg-header-menu-bar lh-1 p-relative ml-10 d-block d-xl-none">
                                 <button onClick={() => setOffCanvas(true)} className="tgmenu-offcanvas-open-btn mobile-nav-toggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </>
   )
}

export default InnerHeader
