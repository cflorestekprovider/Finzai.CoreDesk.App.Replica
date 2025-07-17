import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = "en";

const isDevelopment = process.env.NODE_ENV === "development";
const loadPath = isDevelopment
  ? "/locales/{{lng}}/translation.json" // Ruta para desarrollo
  : "/CoreDesk/locales/{{lng}}/translation.json"; // Ruta para producción

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      loadPath: loadPath,
    },
    debug: false, 
    react: {
      useSuspense: false 
    }
  });

export default i18n;