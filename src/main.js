import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/assets/style.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(vuetify).use(store).mount('#app')
