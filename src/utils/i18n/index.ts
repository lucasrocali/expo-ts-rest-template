import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import pt from './locales/pt.json';

i18n.translations = {
  pt,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.defaultLocale = 'pt';

export const t = i18n.t;
