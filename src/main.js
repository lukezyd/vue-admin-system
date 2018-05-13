import App from './App'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import store from './store/store'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
