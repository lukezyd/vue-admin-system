<template>
	<div id="mainChart" style="width:100%;height:100%"></div>
</template>
<script>
	import { chartData } from '@/api/home'
	export default{
		data(){
			return {
				mainChart:null,
				catNameList:[],
				catNumList: []
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			init: function() {
				var options = {
			            title: {
			                text: null
			            },
			            grid:{
			            	left:40,
			            	top:40,
			            	right:40,
			            },
			            tooltip: {},
			            itemStyle:{
			            	barBorderRadius:[5,5,0,0]
			            },
			            emphasis:{
			            	itemStyle:{
			            		color:'#e85858'
			            	}
			            },
			            barWidth:40,
			            color:["#bfc2cd"],
			            xAxis: {
			                data: this.catNameList,
			                axisLabel: {
	                            show: true,
	                            textStyle: {
	                                color: '#979797'
	                            }
	                        },
	                        axisLine: {
			                    lineStyle: {
			                        type: 'solid',
			                        color: '#979797',//左边线的颜色
			                    }
			                },
			            },
			            yAxis: {
			            	axisLabel: {
	                            show: true,
	                            textStyle: {
	                                color: '#979797'
	                            }
	                        },
	                        splitLine:{
	                        	 lineStyle: {
			                        type: 'dashed',
			                    }
	                        },
	                        axisLine: {
			                    lineStyle: {
			                        color: '#979797',//左边线的颜色
			                    }
			                } 
			            },
			            series: [{
			                name: '点击量',
			                type: 'bar',
			                data:this.catNumList
			                // data: [5, 20, 36, 10, 10, 20,10, 20,12,34,45,12,34,45]
			            }]
			        };
			    var id = document.getElementById("mainChart");
				this.mainChart = echarts.init(id);
				this.mainChart.setOption(options);

				window.onresize = () =>{
					this.mainChart.resize();
				}
			},

			loadData: function(){
				chartData().then(response => {
					console.log(response)
					if(response.code == 200){
						this.catNameList = response.catChart.cname;
						this.catNumList = response.catChart.num;

						this.init();
					}else{
						console.log(response);
					}
				},error => {
					console.log(error);
				});
			}
		}
	};
</script>