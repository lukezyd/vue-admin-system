import vAlert from './alert.vue'
import Vue from 'vue'

const valert = {
	install : function(){
		Vue.component("v-alert",vAlert);
	}
};

export default valert