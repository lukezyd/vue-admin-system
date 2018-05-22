import App from './App'
import axios from 'axios'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import store from './store/store'
import select from './packages/select'

Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
// Vue.use(ElementUI);
Vue.use(select);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
