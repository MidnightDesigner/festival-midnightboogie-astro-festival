import { locales, defaultLocale, type Locale } from './index';

/**
 * Elimina el prefijo de locale de una ruta.
 * '/eu/programa/' → '/programa/'
 * '/programa/'    → '/programa/'
 * '/eu'           → '/'
 */
export function stripLocaleFromPath(pathname: string): string {
  // Solo los locales no-default tienen prefijo en la URL
  const prefixed = locales.filter((l) => l !== defaultLocale);

  for (const locale of prefixed) {
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return '/';
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length) || '/';
    }
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(segment)
    ? (segment as Locale)
    : defaultLocale;
}