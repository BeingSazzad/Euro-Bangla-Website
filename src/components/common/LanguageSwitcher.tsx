"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES } from "@/i18n/locales";
import { useT } from "@/i18n/LanguageProvider";

const GlobeIcon = () => (
   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
         d="M3.6 12h16.8M12 3.6c2.4 2.6 3.6 5.4 3.6 8.4s-1.2 5.8-3.6 8.4M12 3.6C9.6 6.2 8.4 9 8.4 12s1.2 5.8 3.6 8.4"
         stroke="currentColor"
         strokeWidth="1.6"
         strokeLinecap="round"
      />
   </svg>
);

const LanguageSwitcher = () => {
   const { locale, setLocale, t } = useT();
   const [open, setOpen] = useState(false);
   const boxRef = useRef<HTMLDivElement>(null);
   const current = LOCALES.find((item) => item.code === locale) ?? LOCALES[0];

   useEffect(() => {
      const onClick = (event: MouseEvent) => {
         if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };
      const onKey = (event: KeyboardEvent) => {
         if (event.key === "Escape") setOpen(false);
      };
      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onKey);
      return () => {
         document.removeEventListener("mousedown", onClick);
         document.removeEventListener("keydown", onKey);
      };
   }, []);

   return (
      <div className="tg-lang-switcher" ref={boxRef}>
         <button
            type="button"
            className={`tg-lang-switcher-btn ${open ? "active" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label={t("header.language")}
         >
            <span className="tg-lang-switcher-globe">
               <GlobeIcon />
            </span>
            <span className="tg-lang-switcher-code">{current.short}</span>
         </button>
         {open && (
            <ul className="tg-lang-switcher-menu" role="listbox">
               {LOCALES.map((item) => (
                  <li key={item.code} role="option" aria-selected={item.code === locale}>
                     <button
                        type="button"
                        className={`tg-lang-switcher-item ${item.code === locale ? "active" : ""}`}
                        onClick={() => {
                           setLocale(item.code);
                           setOpen(false);
                        }}
                     >
                        <span className="tg-lang-switcher-flag" aria-hidden="true">
                           {item.flag}
                        </span>
                        <span className="tg-lang-switcher-label">{item.label}</span>
                     </button>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default LanguageSwitcher;
