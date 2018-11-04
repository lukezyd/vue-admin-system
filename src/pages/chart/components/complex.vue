<template>
	<div class="complex-chart">
		<div  id="chartMap"></div>
	</div>
</template>
<script>
 import worldMap from './map'
 export default {
 	created(){
 		this.$nextTick(() => {
 			worldMap.init();
 		})
 	},
 	brforeDestory(){
 		worldMap.removeMap();
 	}
  };
</script>
<style scope>
 #chartMap{
 	width:100%;height: 500px;
 	/*background: #d9dfe2;*/
 }
</style>