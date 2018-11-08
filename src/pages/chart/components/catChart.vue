<template>
	<div class="simple-chart">
		<div class="stroke-box">
		 <div class="stroke-part01" >
			<div id="visualization"></div>
		 </div>
		 <div class="part02-title clearfix"><span class=""><em class="trip-title-name"></em>报告明细</span></div>
		 <el-row type="flex" class="row-bg" justify="">
		  <el-col >
	  		<div class="grid-content bg-purple">
	  			
		    </div>
		  </el-col>
		  <el-col >
		  	<div class="grid-content bg-purple-light">
		  		
		  	</div>
		  </el-col>
		  <el-col >
		  	<div class="grid-content bg-purple">
		  		
		  	</div>
		  </el-col>
		</el-row>
		<el-row class="part02-row" :gutter="20">
		  <el-col :span="6">
		  		<div id="chartRadar" style="width:100%;height:100%;"></div>
			</el-col>
		  <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		</div> 
	</div>
</template>
<script>
import  renderVis from './renderVis'
export default {
	data() {
		return {
			tableData:[
				{text:'健康得分(分)',val:90},
				{text:'体重(kg)',val:90},
				{text:'身长(mm)',val:90},
				{text:'血压？',val:90},
				{text:'心跳？',val:90}
			]
		}
	},
	mounted(){
		renderVis.visSet();
		// this.renderChart();
	},
	methods:{
		renderChart: function(){
			var options = {
			    title: {
			        text: '自定义雷达图'
			    },
			    legend: {
			        data: ['图一','图二', '张三', '李四']
			    },
			    radar: [
			        {
			            indicator: [
			                { text: '指标一' },
			                { text: '指标二' },
			                { text: '指标三' },
			                { text: '指标四' },
			                { text: '指标五' }
			            ],
			            center: ['25%', '50%'],
			            radius: 120,
			            startAngle: 90,
			            splitNumber: 4,
			            shape: 'circle',
			            name: {
			                formatter:'【{value}】',
			                textStyle: {
			                    color:'#72ACD1'
			                }
			            },
			            splitArea: {
			                areaStyle: {
			                    color: ['rgba(114, 172, 209, 0.2)',
			                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
			                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
			                    shadowColor: 'rgba(0, 0, 0, 0.3)',
			                    shadowBlur: 10
			                }
			            },
			            axisLine: {
			                lineStyle: {
			                    color: 'rgba(255, 255, 255, 0.5)'
			                }
			            },
			            splitLine: {
			                lineStyle: {
			                    color: 'rgba(255, 255, 255, 0.5)'
			                }
			            }
			        },
			    ],
			    series: [
			        {
			            name: '雷达图',
			            type: 'radar',
			            itemStyle: {
			                emphasis: {
			                    // color: 各异,
			                    lineStyle: {
			                        width: 4
			                    }
			                }
			            },
			            data: [
			                {
			                    value: [100, 8, 0.40, -80, 2000],
			                    name: '图一',
			                    symbol: 'rect',
			                    symbolSize: 5,
			                    lineStyle: {
			                        normal: {
			                            type: 'dashed'
			                        }
			                    }
			                }
			            ]
			        }
			    ]
			};
			var id = document.getElementById("chartRadar");
			this.mainChart = this.echarts.init(id);
			this.mainChart.setOption(options);
		}
	}
};
</script>
<style scope>
.simple-chart{
	font-size: 14px;
	margin-top: 20px;
}
.vis-item.vis-background{
	background-color: rgba(82, 181, 97,.6);
	border-color: rgba(82, 181, 97,1);
}
.vis-item-content{
	color: #fff;
	background-color: rgba(82, 181, 97,1);
	width:auto !important;
}
.vis-timeline{
	border:none !important;
}

.el-row{
	height: 200px;
	width: 100%;
}
.el-col{
	height: 100%;
	border-right:1px solid #ddd;
}
.el-col:last-child{
	border-right: none;
}
.part02-row{
	height: 400px;
	border-top:1px solid #ddd;
}
</style>

