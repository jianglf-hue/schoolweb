import { createApp } from 'vue'
import 'tailwindcss/dist/tailwind.css'

import router from './routes'
import App from './App.vue'

createApp(App).use(router).mount('#app')
