import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import './assets/sass/element-variable.scss'
import './assets/sass/style.scss'

require('./mock')

import zchart from '@/packages/charts'

Vue.prototype.echarts = echarts
Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(zchart);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
