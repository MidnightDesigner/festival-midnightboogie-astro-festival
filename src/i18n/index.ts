import { ui, type UIDict } from './ui';

export const locales = ['es', 'eu', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export function useTranslations(lang: Locale | undefined): (key: keyof UIDict) => string {
  const currentLang = (lang && locales.includes(lang as Locale)) ? lang : defaultLocale;
  return function t(key: keyof UIDict) {
    return ui[currentLang as Locale][key] || ui[defaultLocale][key] || key;
  };
}