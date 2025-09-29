import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

import { Icon } from '@iconify/vue'
import SaasDefaultLayout from './modules/saas/components/layouts/SaasDefaultLayout.vue'
import EmptyLayout from './components/layouts/EmptyLayout.vue'

const app = createApp(App)
const head = createHead()

app.component('empty-layout', EmptyLayout)
app.component('saas-layout', SaasDefaultLayout)
app.component('Icon', Icon)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
