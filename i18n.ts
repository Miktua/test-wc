import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import store from "store";
import eng from "./public/locales/eng/translation.json";
import ua from "./public/locales/ua/translation.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  eng: {
    translation: eng,
  },
  ua: {
    translation: ua,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "eng",
    fallbackLng: ["eng"],
    // whitelist: ['en'],
    detection: {
      order: ["localStorage", "navigator"],
      lookupFromPathIndex: 0,
      lookupLocalStorage: "lang",
    },

    keySeparator: "::",
    nsSeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng: string) => {
  store.set("lang", lng);
});

export default i18n;
