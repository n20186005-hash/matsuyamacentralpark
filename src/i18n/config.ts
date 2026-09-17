export const defaultLocale = 'ja' as const;

export const locales = ['ja', 'zh-Hant', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  ja: '日本語',
  'zh-Hant': '繁體中文',
  en: 'English'
};

export const htmlLang: Record<Locale, string> = {
  ja: 'ja',
  'zh-Hant': 'zh-Hant',
  en: 'en'
};

export const ogLocale: Record<Locale, string> = {
  ja: 'ja_JP',
  'zh-Hant': 'zh_TW',
  en: 'en_US'
};

/** Locales for which a full page translation exists. */
export const translatedLocales: Locale[] = ['ja', 'zh-Hant', 'en'];
