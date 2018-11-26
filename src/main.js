import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false // 阻止 vue 在启动时生成生产提示

// Vue.config.performance = true // 浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪

Vue.config.keyCodes = { // Vue自定义按键

}

Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
