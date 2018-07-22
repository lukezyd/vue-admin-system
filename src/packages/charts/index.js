import zchart from './charts.vue';

zchart.install = function(vue){
	vue.component(zchart.name,zchart);
}

export default zchart