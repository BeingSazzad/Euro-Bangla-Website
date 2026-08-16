export const LOCALES = [
   { code: "en", short: "EN", label: "English", native: "English", flag: "🇬🇧" },
   { code: "bn", short: "BN", label: "Bangla", native: "বাংলা", flag: "🇧🇩" },
   { code: "fr", short: "FR", label: "French", native: "Français", flag: "🇫🇷" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: Locale = "en";
export const LANG_STORAGE_KEY = "ebt-lang";

export const isLocale = (value: string | null): value is Locale =>
   LOCALES.some((item) => item.code === value);
