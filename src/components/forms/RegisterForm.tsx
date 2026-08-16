"use client"
import Link from "next/link"
import { useT } from "@/i18n/LanguageProvider"

const RegisterForm = () => {
   const { t } = useT();

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="row">
            <div className="col-lg-12 mb-25">
               <input className="input" type="text" placeholder={t("auth.username")} />
            </div>
            <div className="col-lg-12 mb-25">
               <input className="input" type="email" placeholder={t("auth.emailEnter")} />
            </div>
            <div className="col-lg-12 mb-25">
               <input className="input" type="text" placeholder={t("auth.password")} />
            </div>
            <div className="col-lg-12 mb-25">
               <input className="input" type="text" placeholder={t("auth.confirm")} />
            </div>
            <div className="col-lg-12">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="review-checkbox d-flex align-items-center mb-25">
                     <input className="tg-checkbox" type="checkbox" id="australia" />
                     <label htmlFor="australia" className="tg-label">{t("auth.remember")}</label>
                  </div>
                  <div className="tg-login-navigate mb-25">
                     <Link href="/login">{t("auth.logIn")}</Link>
                  </div>
               </div>
               <button type="submit" className="tg-btn w-100">{t("auth.signUp")}</button>
            </div>
         </div>
      </form>
   )
}

export default RegisterForm
