"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import SiteLogo from "@/components/common/SiteLogo";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import HeaderWhatsApp from "@/components/common/HeaderWhatsApp";

const HeaderFour = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header className="tg-header-height">
            <div className={`tg-header__area tg-header-lg-space tg-grey-bg ${sticky ? "header-sticky" : ""}`} id="header-sticky">
               <div className="container-fluid container-1545">
                  <div className="row align-items-center">
                     <div className="col-xl-5 d-none d-xl-block">
                        <div className="tgmenu__wrap d-flex align-items-center">
                           <nav className="tgmenu__nav tgmenu-1-space">
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu tgmenu__navbar-wrap-2 d-none d-xl-flex">
                                 <NavMenu />
                              </div>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-2 col-4">
                        <div className="logo tg-header-logo text-center p-relative z-index-1">
                           <span className="tg-header-logo-bg d-none d-xl-block"></span>
                           <Link href="/"><SiteLogo priority /></Link>
                        </div>
                     </div>
                     <div className="col-xl-5 col-8">
                        <div className="tg-menu-right-action tg-menu-right-action-2 d-flex align-items-center justify-content-end">
                           <LanguageSwitcher />
                           <HeaderWhatsApp className="ml-20 d-none d-xl-flex" />
                           <div className="tg-header-menu-bar lh-1 p-relative pl-20 d-block d-xl-none">
                              <button onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="tgmenu-offcanvas-open-btn mobile-nav-toggler mobile-nav-black">
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
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
   )
}

export default HeaderFour
