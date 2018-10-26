import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import './assets/sass/element-variable.scss'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/sass/style.scss'

require('./mock')

Vue.prototype.echarts = echarts
Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
