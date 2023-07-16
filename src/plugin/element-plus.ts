import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { App } from 'vue'

export default {
  install(app: App) {
    app.use(ElementPlus, { size: 'default', locale: zhCn })
  },
}
