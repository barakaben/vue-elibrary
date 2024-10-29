import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Paginator from 'primevue/paginator'
import 'primevue/resources/primevue.min.css'

import router from './router.js'

const app=createApp(App)
app.component('Paginator',Paginator)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
