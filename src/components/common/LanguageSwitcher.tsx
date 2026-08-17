"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { iconProps } from "@/data/icons";
import { LOCALES } from "@/i18n/locales";
import { useT } from "@/i18n/LanguageProvider";

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
               <Globe {...iconProps("md")} />
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
