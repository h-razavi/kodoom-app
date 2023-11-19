import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./en.json";
import faJSON from "./fa.json";

const resources = {
  en: {
    ...enJSON,
  },
  fa: {
    ...faJSON,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
