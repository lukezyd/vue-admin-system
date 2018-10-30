import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store/store'
import './assets/sass/style.scss'
import './elementui'

require('./mock')

Vue.prototype.echarts = echarts
Vue.config.productionTip = true;
Vue.prototype.$axios = axios;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
