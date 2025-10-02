import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { useSaasAuthStore } from './modules/saas/store/saasAuthSore'

import App from './App.vue'
import router from './router'

import { Icon } from '@iconify/vue'
import SaasDefaultLayout from './modules/saas/components/layouts/SaasDefaultLayout.vue'
import EmptyLayout from './components/layouts/EmptyLayout.vue'
import Can from './modules/saas/components/can.vue'
import Multiselect from 'vue-multiselect'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)

const saasAuthStore = useSaasAuthStore()
await saasAuthStore.init()

app.component('empty-layout', EmptyLayout)
app.component('saas-layout', SaasDefaultLayout)
app.component('Can', Can)
app.component('Icon', Icon)
app.component('Multiselect', Multiselect)

app.mount('#app')
