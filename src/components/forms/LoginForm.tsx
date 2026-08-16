"use client"
import Link from "next/link"
import { useT } from "@/i18n/LanguageProvider"

const LoginForm = () => {
   const { t } = useT();

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="row">
            <div className="col-lg-12 mb-25">
               <input className="input" type="text" placeholder={t("auth.email")} />
            </div>
            <div className="col-lg-12 mb-25">
               <input className="input" type="password" placeholder={t("auth.password")} />
            </div>
            <div className="col-lg-12">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="review-checkbox d-flex align-items-center mb-25">
                     <input className="tg-checkbox" type="checkbox" id="australia" />
                     <label htmlFor="australia" className="tg-label">{t("auth.remember")}</label>
                  </div>
                  <div className="tg-login-navigate mb-25">
                     <Link href="/register">{t("auth.registerNow")}</Link>
                  </div>
               </div>
               <button type="submit" className="tg-btn w-100">{t("auth.signIn")}</button>
            </div>
         </div>
      </form>
   )
}

export default LoginForm
