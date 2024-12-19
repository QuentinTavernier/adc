import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    fr: {
        translation: require('../locales/fr.json')
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
