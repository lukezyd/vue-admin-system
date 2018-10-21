<template>
	<div class="zChart" style="width:100%;height:100%">
		<div :id="chartId" style="width:100%;height:100%"></div>
	</div>
</template>
<script>
	export default{
		name:'zchart',
		props:{
			chartId:{
				type:String
			},
			options:{
				type:Object
			}
		},
		data(){
			return {

			}
		},
		mounted:function(){
			this.init();
		},
		methods:{
			init: function() {
				var _options = {
			            title: {
			                text: null
			            },
			            tooltip: {},
			            color:[],
			            xAxis: {
			                data: []
			            },
			            yAxis: {},
			            series: [{
			                name: '',
			                type: 'bar',
			                data:[]
			            }]
			        };
			    var id = document.getElementById(this.chartId);
				var options = Object.assign({},_options,this.options);
				var myChart = this.echarts.init(id);
				myChart.setOption(options);

				window.onresize = function(){
					console.log(id)
					myChart.resize();
				}
			}
		}
	}
</script>