// src/lib/i18n.js
import { translations, supportedLocales } from '../data/translations';

export function getTranslation(key, locale = 'es') {
  const locales = key.split('.');
  let value = translations[locale];
  
  for (const loc of locales) {
    value = value?.[loc];
  }
  
  return value || translations['es'][locales.join('.')];
}

export function getLocaleFromPathname(pathname) {
  const match = pathname.match(/^\/([a-z]{2})\//);
  return match ? match[1] : 'es';
}