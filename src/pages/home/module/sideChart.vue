<template>
	<div style="width:100%;height:100%">
		<div id="sideChart01" style="width:100%;height:48%;"></div>
		<div id="sideChart02" style="width:100%;height:48%;"></div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				sideChart01:'',
				sideChart02:''
			}
		},
		mounted(){
			this.init();
		},
		created(){

		},	
		methods:{
			init: function() {
				var sideChartOption01 = {
			           title:{
							text:"this week",
							textStyle:{
								color:"#fff"
							}
						},
						grid:{
			            	left:50,
			            	top:20,
			            	right:50,
			            	bottom:20
			            },
			            tooltip:{
			            	show:true
			            },
					    xAxis: {
					        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					         axisLabel:{
						    	textStyle:{
						    		color:"#fff"
						    	}
						    },
						    axisLine:{
						    	lineStyle:{
						    		color:"#fff"
						    	}
						    }
					    },
					    yAxis: {
					        type: 'value',
					         show:false
					    },
					    color:["#fff"],
					    series: [{
			    		    symbol:'circle',
					        symbolSize:10,
					        data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
					        type: 'line'
					    }]
			        };

			     	var sideChartOption02 = {
							title:{
								text:"this week",
								textStyle:{
									color:"#fff"
								}
							},
							tooltip:{
				            	show:true
				            },
							grid:{
				            	left:50,
				            	top:35,
				            	right:50,
				            	bottom:20
				            },
				            barWidth:20,
				            itemStyle:{
				            	barBorderRadius:[3,3,0,0]
				            },
							xAxis: {
							    type: 'category',
							    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
							     axisLabel:{
							    	textStyle:{
							    		color:"#fff"
							    	}
							    },
							    axisLine:{
							    	lineStyle:{
							    		color:"#fff"
							    	}
							    }
							},
							yAxis: {
							    type: 'value',
							    show:false
							},
							color:["#fff"],
							series: [{
							    data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
							    type: 'bar'
							}]
			        };
				self.sideChart01 = echarts.init(document.getElementById("sideChart01"));
				self.sideChart01.setOption(sideChartOption01);

				self.sideChart02 = echarts.init(document.getElementById("sideChart02"));
				self.sideChart02.setOption(sideChartOption02);

				this.$nextTick( () => {
					window.onresize = function(){
						self.sideChart01.resize();
						self.sideChart02.resize();
					}
				});
			}
		}
	}
</script>
<style>
	#sideChart01{
		padding: 10px;
		background-color: #f19090;
		color:#fff;
		border-radius:5px;
	}
	#sideChart02{
		margin-top: 2%;
		padding: 10px;
		background-color: #6cb2d9;
		color:#fff;
		border-radius: 5px;
	}
</style>