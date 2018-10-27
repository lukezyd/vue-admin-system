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
			window.addEventListener('resize',this.resizeChart,false);
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
			            	top:50,
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
					        data: [20,40, 60, 80, 70, 110, 130, 150, 80, 70, 110, 130],
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
				            	top:50,
				            	right:50,
				            	bottom:20
				            },
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
				this.sideChart01 = this.echarts.init(document.getElementById("sideChart01"));
				this.sideChart01.setOption(sideChartOption01);

				this.sideChart02 = this.echarts.init(document.getElementById("sideChart02"));
				this.sideChart02.setOption(sideChartOption02);

			},
			resizeChart: function(){
				this.sideChart01.resize();
				this.sideChart02.resize();
			}
		},
		brforeDestory(){
			this.sideChart01.dispose();
			this.sideChart02.dispose();
			window.removeEventListener('resize',this.resizeChart);
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
		margin-top: 4%;
		padding: 10px;
		background-color: #6cb2d9;
		color:#fff;
		border-radius: 5px;
	}
</style>