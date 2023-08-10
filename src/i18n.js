import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
import TranslationEn  from "./assets/locales/en/translation.json";
import TranslationAR  from "./assets/locales/ar/translation.json";

const resources = {
  en: {
    translation: TranslationEn
  },
  ar: {
    translation: TranslationAR
  }
};

i18n
  .use(LanguageDetector) //added
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lng")||"en",
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
        useSuspense: false
    }
  });

  export default i18n;









// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// const fallbackLng = ['en'];
// const availableLanguages =['en' , 'ar'];


// const options = {

//   order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],


//   lookupQuerystring: 'lng',
//   lookupCookie: 'i18next',
//   lookupLocalStorage: 'i18nextLng',
//   lookupFromPathIndex: 0,
//   lookupFromSubdomainIndex: 0,


//   caches: ['localStorage', 'cookie'],
//   excludeCacheFor: ['cimode'], 

//   cookieMinutes: 10,
//   cookieDomain: 'myDomain',


//   htmlTag: document.documentElement,


//   checkWhitelist: true
// }

// i18n
// .use(Backend) 
// .use(LanguageDetector)

// .use(initReactI18next)

// .init({
//   fallbackLng,
//   debug: true,
//   whitelist: availableLanguages,
//   detection: options,

//   interpolation: {
//     escapeValue: false
//   },
// });



// export default i18n;