// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import uz from "../locales/uz.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      en: { translation: en },
      ru: { translation: ru }
    },
    lng: "uz",
    fallbackLng: "uz",
    interpolation: { escapeValue: false }
  });

export default i18n;
