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

   const accept = () => {
      window.localStorage.setItem(COOKIE_KEY, "accepted");
      document.cookie = `${COOKIE_KEY}=accepted;path=/;max-age=31536000;SameSite=Lax`;
      setVisible(false);
   };

   if (!visible) return null;

   return (
      <div className="ebt-cookie-banner" role="dialog" aria-live="polite" aria-label={t("cookie.accept")}>
         <p className="ebt-cookie-text mb-0">
            {t("cookie.text")}{" "}
            <Link href="/cookies" className="ebt-cookie-link">
               {t("cookie.more")}
            </Link>
         </p>
         <button type="button" className="ebt-cookie-accept" onClick={accept}>
            {t("cookie.accept")}
         </button>
      </div>
   );
};

export default CookieConsent;
