import { defaultLocale, locales, type Locale } from './config';

/** Detect the active locale from a URL's pathname. */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/** Remove any leading locale prefix from a pathname. */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(ja|zh-Hant|en)(?=\/|$)/, '') || '/';
}

/** Return the pathname rewritten for the given locale (default locale = no prefix). */
export function localizePath(pathname: string, locale: Locale): string {
  const clean = stripLocale(pathname);
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}
