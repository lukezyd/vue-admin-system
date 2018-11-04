import Vue from 'vue'
import Vuex from 'vuex'


import user from './module/user'
import form from './module/form'
Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		user,
		form
	}
})

export default store