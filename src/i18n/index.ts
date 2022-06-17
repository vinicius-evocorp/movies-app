import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//* locales
import en_US from '@/assets/locales/en_US';
import pt_BR from '@/assets/locales/pt_BR';

export const DEFAULT_LOCALE = 'en';
export const AVAILABLE_NS_LIST = ['common']; // * namespaces

export const defaultNS = 'common'; // * default namespace

export const resources = {
  en: en_US,
  'pt-BR': pt_BR,
} as const;

i18n
  .use(LanguageDetector) // * detect user language
  .use(initReactI18next) // * passes i18n down to react-i18next
  .init({
    // * the translations
    resources,

    // * lng: DEFAULT_LOCALE, // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    // * the namespaces
    ns: AVAILABLE_NS_LIST,
    defaultNS,

    debug: import.meta.env.DEV, // * debug only in dev

    interpolation: {
      escapeValue: false, // * not needed for react!! (react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape)
    },
  });

export default i18n;
