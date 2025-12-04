import { createI18n } from 'vue-i18n'
import fr from '../../i18n/locales/fr.json'
import en from '../../i18n/locales/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: {
      fr,
      en
    }
  })

  vueApp.use(i18n)
})
