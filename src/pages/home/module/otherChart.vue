<template>
	<div style="width:100%;height: 100%;">
		<div class="otherChart-bottom">
			 <el-carousel trigger="click" style="height:100%;">
		      <el-carousel-item v-for="item in 4" :key="item">
		      	<div class="swiper-content">
		      		<h3>这是一个标题</h3>
		        	<p>这是一个描述，这是一个描述，这是一个描述，这是一个描述</p>
		      	</div>
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div class="otherChart-top" style="height:64%;">
			<div class="otherChart-top__title">
				<span class="top-title__icon fl"><i class="fa fa-bar-chart"></i></span>
				<span >概况</span>
				<span class="top-title__icon fr">2018-12月</span>
			</div>
			<div id="otherChart01" ></div>
			<div class="otherChart-top__menu">
				<ul>
					<li class="active"><i class="fa fa-bullseye"></i><br><span>kekeke</span></li>
					<li><i class="fa fa-braille"></i><br><span>kekeke</span></li>
					<li><i class="fa fa-clone"></i><br><span>kekeke</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init: function() {
				var sideChartOption01 =  {
							 tooltip : {
							        trigger: 'item',
							        formatter: "{a} <br/>{b} : {c} ({d}%)"
							    },
							    visualMap: {
							        show: false,
							        min: 80,
							        max: 600,
							        inRange: {
							            colorLightness: [0, 1.2]
							        }
							    },
							    series : [
							        {
							            name:'访问来源',
							            type:'pie',
							            radius : '75%',
							            center: ['50%', '50%'],
							            data:[
							                {value:335, name:'直接访问'},
							                {value:310, name:'邮件营销'},
							                {value:274, name:'联盟广告'},
							                {value:235, name:'视频广告'},
							                {value:400, name:'搜索引擎'}
							            ].sort(function (a, b) { return a.value - b.value; }),
							            roseType: 'radius',
							            label: {
							                normal: {
							                    textStyle: {
							                        color: '#ff6c60'
							                    }
							                }
							            },
							            labelLine: {
							                normal: {
							                    lineStyle: {
							                        color: '#ff6c60'
							                    },
							                    smooth: 0.2,
							                    length: 10,
							                    length2: 20
							                }
							            },
							            itemStyle: {
							                normal: {
							                    color: '#c23531',
							                }
							            },
							            animationType: 'scale',
							            animationEasing: 'elasticOut',
							            animationDelay: function (idx) {
							                return Math.random() * 200;
							            }
							        }
							      ]
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
				var otherChart01 = echarts.init(document.getElementById("otherChart01"));
				otherChart01.setOption(sideChartOption01);

				// var otherChart02 = echarts.init(document.getElementById("otherChart02"));
				// otherChart02.setOption(sideChartOption02);

				window.onresize = function(){
					otherChart02.resize();
				}
			}
		}
	};
</script>
<style>
.otherChart-top{
	position: relative;
	background: #fff;
}
	.otherChart-top__title{
		width:100%;
		height:40px;
		line-height: 40px;
		background: #ff6c60;
		color:#fff;
	}
	.top-title__icon{
		display: inline-block;
		padding: 0 15px;	
		height: 40px;
		background: #e56155;
	}
	.otherChart-top__menu{
		height: 60px;
		background: #e6e7ec;
		border-bottom: 1px solid #ddd;
		clear: both;
	}
	.otherChart-top__menu ul{
		height: 60px;
		width:100%;
		overflow: hidden;
	}
	.otherChart-top__menu ul li{
		width:33.33%;
		height: 60px;
		padding: 12px 0;
		float: left;
		border-right: 1px solid #ddd;
		cursor:pointer;
	}
	.otherChart-top__menu li.active{
		background: #fff;
    	color: #ff6c60;
	}
	.otherChart-top__menu li:hover{
		/*background: #9dc5c5;*/
		background: #fff;
    	color: #ff6c60;
	}
	#otherChart01{
		height:calc(100% - 100px);
		width:100%;
	}
	
	.otherChart-bottom{
		background: #fff;
		height: 34%; 
		margin-bottom: 2%;
	}
	
	.el-carousel__container{
		height: 100%;
	}
	.el-carousel__item h3 {
	    color: #fff;
	    font-size: 15px;
	    opacity: 0.75;
	    margin: 0;
	  }
	  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  }
	  .swiper-content{
	  	height: 100px;
	  	position: absolute;
	  	bottom: 0;
	  	width:100%;
	  	color:#fff;
	  	padding: 20px 50px;
	  	text-align: left;
	  	background: rgba(0,0,0,.3);
	  }
</style>