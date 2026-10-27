import { translations } from '../data/translations';

export function getTranslation(key: string, locale: string = 'es'): string {
  const keys = key.split('.');

  const resolve = (lang: string) => {
    let current: any = translations[lang];
    for (const k of keys) {
      if (current === undefined || current === null) return undefined;
      current = current[k];
    }
    return current;
  };

  return (resolve(locale) ?? resolve('es') ?? key) as string;
}

export function getLocaleFromPathname(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})\//);
  return match ? match[1] : 'es';
}