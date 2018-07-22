import App from './App'
import axios from 'axios'
import router from './router'
import Vue from 'vue'
import store from './store/store'
import select from './packages/select'
import zalert from './packages/alert'
import zchart from './packages/charts'
import zcheckbox from './packages/checkbox'
import 'font-awesome/css/font-awesome.css'
import './assets/sass/style.scss'

Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
Vue.use(select);
Vue.use(zalert);
Vue.use(zchart);
Vue.use(zcheckbox);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
