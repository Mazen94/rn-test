import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import fr from '_languages/fr';

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
  },
  lng: 'fr',
  fallbackLng: 'fr',

  interpolation: {
    escapeValue: false,
  },
});
export function strings(name: string, params = {}) {
  return i18n.t(name, params);
}
