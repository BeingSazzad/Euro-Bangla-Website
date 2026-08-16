"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useT } from "@/i18n/LanguageProvider"

import img from "@/assets/img/error/text.png"

const ErrorArea = () => {
   const { t } = useT();

   return (
      <div className="tg-error-area-start tg-error-spacing">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="tg-error-content text-center">
                     <Image className="mb-40" src={img} alt="error" />
                     <h2 className="mb-15">{t("error.title")}</h2>
                     <p className="mb-35">{t("error.text")}</p>
                     <div className="tg-error-btn">
                        <Link className="tg-btn" href="/">{t("error.back")}</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ErrorArea
