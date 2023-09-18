import { createI18n } from 'vue-i18n'
import en from './src/locales/en.json'
import uk from '/src/locales/uk.json'
const instance = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: { en, uk }
})
export default instance
export const i18n = instance.global
