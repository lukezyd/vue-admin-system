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
		  	  <div class="grid-content bg-purple">
		  		<div id="chartRadar" style="width:100%;height:100%;"></div>
			  </div>
			</el-col>
		  <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<!--  <div class="stroke-details clearfix">
		 <div class="stroke-part02 clearfix" >
			 <div class="part02-title clearfix"><span class=""><em class="trip-title-name"></em>报告明细</span></div>
			 <div class="sp2-box01 sp2-box">
	  			  <el-table
	  			       :show-header="false"
				      :data="tableData"
				      style="width: 100%">
				      <el-table-column
				        prop="text"
				        >   
				      </el-table-column>
				      <el-table-column
				        prop="val"
				       >
				      </el-table-column>
				    </el-table>
			  </div>
			  <div class="sp2-box02 sp2-box">
			  	<p><span class="t-text">起始时间</span><span class="t-data">21414</span></p>
			  	<p><span class="t-text">结束时间</span><span class="t-data">12414</span></p>
			  	<div class="sp2-place">'
			  		<p class="sp2-title">起始点</p>
			  	 <div class="box">
			  		<div class="start"><i class="iconfont icon-dingwei i-start"></i><p>12222222222</p></div>
			  			<div class="end"><i class="iconfont icon-dingwei i-end"></i><p>12222222</p></div>
			  		</div>
			  	</div>
			  </div>
			  <div class="sp2-box03 sp2-box">
			  	<p><span class="t-text">编号：</span><span class="t-data">21414</span></p>
			  	<p><span class="t-text">所属机构：</span><span class="t-data">124</span></p>
			  	<p><span class="t-text">车辆类型：</span><span class="t-data">124</span></p>
			  	<p><span class="t-text">绑定司机：</span><span class="t-data">124</span></p>
			  	<p><span class="t-text">手机号码：</span><span class="t-data">124</span></p>
			  </div>
		 </div>
		 <div class="stroke-part03" >
			<div class="sp3-box01 column-3-1">
			  	<div class="m-list">
			  		<ul class="clearfix">
			  			<li>
			  				<p class="num"></p>
			  				<p>1222224</p>
			  			</li>
			  			<li><p class="num">--</p><p>急转弯</p></li>
			  			<li><p class="num">--</p><p>急加速</p></li>
			  			<li><p class="num">--</p><p>急减速</p></li>
			  			<li><p class="num">--</p><p>疲劳驾驶</p></li>
			  			<li><p class="num">--</p><p>超速驾驶</p></li>
			  		</ul>
			  		<div class="chart02">
			  			<div class="s-chart02" style="width:100%;height:100%"></div>
			  		</div>
			  	</div>
			</div>
			<div class="sp3-box02">
				<div class="stroke-chart02"></div>
			</div>
		 </div>
		 </div>
		<div class="stroke-part04" >
			<div id="mapStrokeArea"></div>
			<canvas class="canvas" style="position: absolute;top:0;left: 0;z-index:9999"></canvas>
		 </div>-->
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
		this.renderChart();
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
.el-table tr{
	background-color: #a3c0c1;
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

