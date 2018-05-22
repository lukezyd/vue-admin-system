import select from './select.vue'
import Vue from 'vue'

const vselect = {
	install :function(){
		Vue.component("v-select",select);
	}
}

export default vselect