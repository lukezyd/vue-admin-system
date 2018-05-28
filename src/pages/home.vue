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
			<div class="new-user">
				<div class="personal clearfix">
					<span class="personal-logo fl"><img :src="personal.logo" alt=""></span>
					<div>
						<p class="personal-name">{{personal.name}}</p>
						<p>{{personal.desc}}</p>
					</div>
				</div>
				<ul>
					<li class="clearfix"  v-for="item in property">
						<span class="fl"><i class="fa" :class="item.icon"></i></span>
						<span>{{item.desc}}</span>
						<span class="fr">{{item.num}}</span>
					</li>
				</ul>
			</div>

			<div class="tag-rank">
				<div class="rank-top clearfix">
					<h4 class="fl">排行榜</h4>
					<v-select class="fr" :lists="lists" ></v-select>
				</div>
				<ul>
					<li v-for="(item,i) in tagList">
						<span>{{i + 1}}</span>
						<span>{{item.text}}</span>
						<span>{{item.num}}</span>
						<span>{{item.chart}}</span>
					</li>
				</ul>
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
				colorList:["#e49393","#88dcef","#84daab","#ddb3de"],
				personal:{
					logo:"/static/images/p_logo.jpg",
					name:"Cat dan",
					desc:"一只两个月大的猫。"
				},
				property:[
					{icon:"fa-cubes",desc:"吃猫粮",num:12},
					{icon:"fa-heartbeat",desc:"配玩耍",num:22},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15}
				],
				lists:[
					{id:1,text:"aaaaaaa"},
					{id:2,text:"bbbbbbb"},
					{id:3,text:"cccccccc"},
					{id:4,text:"ddddddddd"},
					{id:5,text:"eeeeeeeeee"}
				],
				tagList:[
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""}
				]
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
		            color:["#bfc2cd"],
		            // color:["#6ccce2","#bfc2cd"],
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
		background: #f1f2f7;
	}
	.home-main{
		position: relative;
		overflow: hidden;
		background: #f1f2f7;
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
		text-align: center;
		overflow: hidden;
		padding: 10px 0;
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
		margin: 25px 0;
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
	.new-user{
		clear: both;
		width: 33%;
		background: #fff;
		float: left;
	}
	.personal{
		padding: 15px;
	}
	.personal div{
		overflow: hidden;
	}
	.personal p{
		text-align: left;
		padding-left: 20px;
		margin-top: 12px;
	}
	.personal-name{
		color:#4ac7ef;
	}
	.personal-logo img{
		width: 120px;
		height: 108px;
	}
	.new-user li{
		list-style: none;
		border-top: 1px solid #eee;
		line-height: 45px;
		text-align: center;
		padding: 0 20px;
	}
	.tag-rank{
		width: 65%;
		margin-left: 1%;
		height: 280px;
		background: #fff;
		float: right;
	}
	.rank-top{
		padding:15px;
	}
	.tag-rank li{
		list-style: none;
		line-height: 42px;
		padding:0 15px;
		display: table;
		width: 100%;
		border-top:1px solid #eee;
	}
	.tag-rank li span{
		display: table-cell;
	}
</style>