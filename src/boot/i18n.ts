import { boot } from 'quasar/wrappers'
import {createI18n} from 'vue-i18n'
import messages from 'src/i18n'

// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do
  const i18n = createI18n({
    locale: 'en-US',
    legacy: false,
    globalInjection: true,
    messages
  })
  
  // Tell app to use the I18n instance
  app.use(i18n)
})
