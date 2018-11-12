import Vue from 'vue'
import Vuex from 'vuex'


import user from './module/user'
import form from './module/form'
import table from './module/table'
Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		user,
		form,
		table
	}
})

export default store