import type { Locale } from './config';
import type { SiteContent } from '../data/site';
import ja from '../data/content.json';
import zhHant from '../data/content.zh-Hant.json';
import en from '../data/content.en.json';

/** Return the fully translated content object for a locale. */
export function getContent(locale: Locale): SiteContent {
  if (locale === 'zh-Hant') return zhHant as SiteContent;
  if (locale === 'en') return en as SiteContent;
  return ja as SiteContent;
}
