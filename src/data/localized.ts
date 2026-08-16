import type { Locale } from "@/i18n/locales";

export type LText = Record<Locale, string>;

export const tx = (value: LText, locale: Locale) => value[locale] || value.en;
