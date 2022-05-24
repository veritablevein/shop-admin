import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'

// 加载全局样式
import './styles/index.scss'

createApp(App)
  .use(router)
  .use(store, key)
  .use(elementPlus, { size: 'small', zIndex: '2000' })
  .mount('#app')
