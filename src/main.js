import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

import 'primevue/resources/themes/aura-dark-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const app = createApp(App)

app.use(PrimeVue)
app.use(ToastService)

app.component('Toast', Toast)
app.component('Button', Button)
app.component('ProgressBar', ProgressBar)

app.mount('#app')
