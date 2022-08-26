import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'
import { globalRegister } from '@/global'

setupStore()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(globalRegister)

app.mount('#app')
