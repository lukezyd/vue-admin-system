<template>
	<div class="home">
		<div class="home-main">
			<div class="data-sum">
				<ul>
					<li  v-for="(item,i) in sumList">
						<span class="fa fl" :style="{background:colorList[i]}" :class="item.icon" ></span>
						<div class="text-box">
							<span class="sun-num">{{item.num}}</span>
							<span class="sun-desc">{{item.desc}}</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="main-chart">
				<div id="chart01" style="width:100%;height:100%"></div>
			</div>
			<div class="aside-chart">
				<div id="chart02" style="width:100%;height:48%;"></div>
				<div id="chart03" style="width:100%;height:48%;"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name :"home",
		data(){
			return {
				sumList:[
					{icon:"fa-users fa-2x",num:200,desc:"新增用户"},
					{icon:"fa-tags fa-2x",num:200,desc:"新增标签"},
					{icon:"fa-line-chart fa-2x",num:500,desc:"累计时长"},
					{icon:"fa-bar-chart fa-2x",num:600,desc:"总计"},
				],
				colorList:["#e49393","#88dcef","#84daab","#ddb3de"]
			}
		},
		mounted:function(){
			this.initChart();
			this.initChart01();
			this.initChart02();
		},
		methods : {
			initChart:function(){
				 var myChart = this.echarts.init(document.getElementById('chart01'));
				  var option = {
		            title: {
		                text: null
		            },
		            tooltip: {},
		            // legend: {
		            //     data:['销量']
		            // },
		            color:["#6ccce2"],
		            xAxis: {
		                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","袜子","袜子","衬衫","羊毛衫","羊毛衫"]
		            },
		            yAxis: {},
		            series: [{
		                name: '销量',
		                type: 'bar',
		                data: [5, 20, 36, 10, 10, 20,10, 20,12,34,45]
		            }]
		        };
		        myChart.setOption(option);
			},
			initChart01:function(){
				var myChart = this.echarts.init(document.getElementById('chart02'));
				var option = {
						title:{
							text:"this week",
							textStyle:{
								color:"#fff"
							}
						},
					    xAxis: {
					        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
					        data: [820, 932, 901, 934, 1290, 1330, 1320],
					        type: 'line'
					    }]
					};
		        myChart.setOption(option);
			},
			initChart02:function(){
				var myChart = this.echarts.init(document.getElementById('chart03'));
				var option = {
						title:{
							text:"this week",
							textStyle:{
								color:"#fff"
							}
						},
					    xAxis: {
					        type: 'category',
					        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
					        data: [120, 200, 150, 80, 70, 110, 130],
					        type: 'bar'
					    }]
					};

		        myChart.setOption(option);
			}
		}
	}
</script>

<style>
	.home{
		height: 100%;
		width: 100%;
		position: relative;
		background: #f1f1f1;
	}
	.home-main{
		position: relative;
		overflow: hidden;
		background: #f1f1f1;
		height: 100%;
		padding: 20px;
	}
	.data-sum{
		overflow: hidden;
	}
	.data-sum li{
		list-style: none;
		float: left;
		width: 20%;
		margin-right: 6.6666%;
		text-align: center;
		height: 80px;
		background:#fff;
		cursor: pointer;
		border-radius: 5px;
	}
	.data-sum li:last-child{
		margin-right: 0;
	}
	.data-sum li .fa{
		padding:  24px;
		color:#fff;
		width: 40%;
	}
	.text-box{
		text-align: left;
		overflow: hidden;
		padding: 10px 10%;
		border-left:none;
	}
	.sun-num{
		font-size: 34px;
		display: block;
		font-weight: bold;
	}
	.sun-desc{
		font-size: 13px;
		color:#a2a2a2;
	}
	.main-chart{
		margin-top: 25px;
		width: 65%;
		float: left;
		height: 450px;
		background-color: #fff;
		border-radius: 5px;
	}
	.aside-chart{
		margin-top: 25px;
		width: 33%;
		height: 450px;
		float: left;
		margin-left: 2%;
	}
	#chart02{
		padding: 10px;
		background-color: #42cac0;
		color:#fff;
		border-radius: 5px;
	}
	#chart03{
		margin-top: 2%;
		padding: 10px;
		background-color: #a9d96c;
		color:#fff;
		border-radius: 5px;
	}
</style>