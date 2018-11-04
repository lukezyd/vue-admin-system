<template>
	<div style="width:100%;height: 100%;">
		<div class="otherChart-bottom">
			 <el-carousel trigger="click" style="height:100%;">
		      <el-carousel-item v-for="(item,index) in catList" :key="index">
		      	<img class="cat-img" :src="item.img" alt="">
		      	<div class="swiper-content">
		      		<h3>这是一个标题</h3>
		      	</div>
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div class="otherChart-top" style="height:64%;">
			<div class="otherChart-top__title">
				<span class="top-title__icon fl"><i class="fa fa-bar-chart"></i></span>
				<span >概况</span>
				<span class="top-title__icon fr">2018-10月</span>
			</div>
			<div id="otherChart01" ></div>
			<div class="otherChart-top__menu">
				<ul>
					<li class="active"><i class="fa fa-bullseye"></i><br><span>用户来源</span></li>
					<li><i class="fa fa-braille"></i><br><span>流失率</span></li>
					<li><i class="fa fa-clone"></i><br><span>增长率</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				otherChart:null,
				catList:[
					{img:'./static/images/cat01.jpg'},
					{img:'./static/images/cat02.jpg'},
					{img:'./static/images/cat03.jpg'},
					{img:'./static/images/cat04.jpg'}
				]
			}
		},
		mounted(){
			this.init();
			window.addEventListener('resize',this.resizeChart,false);
		},
		methods:{
			init: function() {
				var otherChartOption =  {
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
			    
				this.otherChart = this.echarts.init(document.getElementById("otherChart01"));
				this.otherChart.setOption(otherChartOption);

			},
			resizeChart: function(){
				this.otherChart.resize();
			},
		},
		brforeDestory(){
			this.otherChart.dispose();
			window.removeEventListener('resize',this.resizeChart);
		}
	};
</script>
