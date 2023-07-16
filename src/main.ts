import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import pinia from './store'

import ElementPlus from '@/plugin/element-plus'
import IconsVue from '@/plugin/icons-vue'
import VXETable from '@/plugin/vxe-table'
// scss
import '../src/styles/index.scss'

import 'vxe-table/lib/style.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.use(IconsVue)
app.use(VXETable)
// 自动注册全局自定义组件

const modules = import.meta.glob<{ default: any }>('./components/**/index.ts', { eager: true })
// console.log(modules)
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
