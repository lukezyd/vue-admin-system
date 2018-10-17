<template>
	<div class="zMap">
		<div id="chart03" style="width:500px;height:500px;"></div>
	</div>
</template>
<script>
	import worldMap from './map.js'
	export default{
		name:'zmap',
		data(){
			return {
				
			}
		},
		created(){
			this.$nextTick(function(){
				worldMap.mapChart();
			});
		}
	}
</script>