import './assets/main.css'
import './assets/global.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
