"use client"
import LoginForm from "@/components/forms/LoginForm"
import { useT } from "@/i18n/LanguageProvider"

const LoginArea = () => {
   const { t } = useT();

   return (
      <div className="tg-login-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="tg-login-wrapper">
                     <div className="tg-login-top text-center mb-30">
                        <h2>{t("auth.loginTitle")}</h2>
                        <p>{t("auth.loginText")}</p>
                     </div>
                     <div className="tg-login-form">
                        <div className="tg-tour-about-review-form">
                           <LoginForm />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginArea
