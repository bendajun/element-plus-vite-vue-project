import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')
