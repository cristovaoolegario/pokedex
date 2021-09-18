import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(XHR)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    detection: options,
    resources: {
      en: {
        translations: require("./locales/en/translations.json"),
      },
      "pt-BR": {
        translations: require("./locales/pt-BR/translations.json"),
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["en", "pt-BR"];

export default i18n;
