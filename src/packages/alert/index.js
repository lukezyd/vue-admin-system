import zAlert from './alert.vue'

zAlert.install = function(Vue){
	Vue.component(zAlert.name,zAlert)
}

export default zAlert