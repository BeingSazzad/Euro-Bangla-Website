"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";

const COOKIE_KEY = "ebt-cookie-consent";

const CookieConsent = () => {
   const { t } = useT();
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const saved = window.localStorage.getItem(COOKIE_KEY);
      if (!saved) setVisible(true);
   }, []);

   const choose = (value: "accepted" | "declined") => {
      window.localStorage.setItem(COOKIE_KEY, value);
      document.cookie = `${COOKIE_KEY}=${value};path=/;max-age=31536000;SameSite=Lax`;
      setVisible(false);
   };

   if (!visible) return null;

   return (
      <div className="ebt-cookie-banner">
         <p className="mb-0">{t("cookie.text")}</p>
         <div className="ebt-cookie-actions">
            <Link href="/cookies">{t("cookie.more")}</Link>
            <button type="button" onClick={() => choose("declined")}>
               {t("cookie.decline")}
            </button>
            <button type="button" className="accept" onClick={() => choose("accepted")}>
               {t("cookie.accept")}
            </button>
         </div>
      </div>
   );
};

export default CookieConsent;
