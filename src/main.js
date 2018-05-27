import App from './App'
import axios from 'axios'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import store from './store/store'
import select from './packages/select'
import valert from './packages/msgAlert'
import "font-awesome/css/font-awesome.css"


Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
// Vue.use(ElementUI);
Vue.use(select);
Vue.use(valert);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
