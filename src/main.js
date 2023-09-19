import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import MdIcon from '../src/components/ui/MdIcon.vue'
import i18nInstance from '../i18n'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('MdIcon', MdIcon)
app.use(i18nInstance)
app.use(Notifications)
app.mount('#app')
