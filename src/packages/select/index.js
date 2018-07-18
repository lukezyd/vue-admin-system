import zselect from './select.vue'

zselect.install = function(Vue){
	Vue.component(zselect.name,zselect);
}

export default zselect