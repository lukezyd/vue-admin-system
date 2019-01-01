<template>
	<div class="complex-chart">
		<!--<h3>全球用户分布</h3>-->
		<!--<div  id="chartMap"></div>-->
		<!--<div  id="chart02"></div>-->
		<!--<div  id="chart05"></div>-->
		<!--<div  id="chart01"></div>-->
		<!--<div  id="chart04"></div>-->
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

.complex-chart{
	overflow:hidden;
	padding-bottom: 20px;
}
 #chartMap{
 	width:100%;height: 500px;
 }
 #chart01{
 	width:50%;height: 400px;float: left;overflow: hidden;
 	background: #de8f8f;
 }
 #chart02{
 	width:50%;height: 400px;float: left;overflow: hidden;
 }
 #chart04{
 	width:50%;height: 400px;float: left;overflow: hidden;
 }
 #chart05{
 	width:50%;height: 400px;float: left;overflow: hidden;background: #55c7ea;
 }
</style>

