"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LOCALE, isLocale, LANG_STORAGE_KEY, type Locale } from "./locales";
import { getMessage } from "./messages";

type LanguageContextValue = {
   locale: Locale;
   setLocale: (locale: Locale) => void;
   t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const persistLocale = (locale: Locale) => {
   if (typeof window === "undefined") return;
   window.localStorage.setItem(LANG_STORAGE_KEY, locale);
   document.cookie = `${LANG_STORAGE_KEY}=${locale};path=/;max-age=31536000;SameSite=Lax`;
   document.documentElement.lang = locale;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
   const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

   useEffect(() => {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      const cookie = document.cookie
         .split("; ")
         .find((item) => item.startsWith(`${LANG_STORAGE_KEY}=`))
         ?.split("=")[1];
      const next = isLocale(saved) ? saved : isLocale(cookie ?? null) ? (cookie as Locale) : DEFAULT_LOCALE;
      setLocaleState(next);
      document.documentElement.lang = next;
      if (isLocale(saved) === false && isLocale(cookie ?? null)) {
         window.localStorage.setItem(LANG_STORAGE_KEY, next);
      }
   }, []);

   const setLocale = useCallback((next: Locale) => {
      setLocaleState(next);
      persistLocale(next);
   }, []);

   const t = useCallback((key: string) => getMessage(locale, key), [locale]);

   const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useT = () => {
   const context = useContext(LanguageContext);
   if (!context) {
      throw new Error("useT must be used within LanguageProvider");
   }
   return context;
};
