import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js';

import store from '../../store';

const { lang } = store.state;
app.$lang = lang
const i18n = app.$i18n = createI18n({
  locale: lang,
  messages: {
    en: Object.assign(require('../../locales/en.json')),
    zh: Object.assign(require('../../locales/cn.json')),
  },
});
export default i18n;
