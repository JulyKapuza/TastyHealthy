import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import MdIcon from '../src/components/ui/MdIcon.vue'

const app = createApp(App)
app.use(createPinia())
app.component('MdIcon', MdIcon)
app.mount('#app')