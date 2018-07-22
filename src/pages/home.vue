<template>
	<div class="zHome clearfix">
		<div class="zHome-datasum clearfix" >
			<ul>
				<li  v-for="(item,i) in sumList">
					<span class="fa fl" :style="{background:colorList[i]}" :class="item.icon" ></span>
					<div class="zHome-datasum__box">
						<span class="sun-num">{{item.num}}</span>
						<span class="sun-desc">{{item.desc}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="zHome-main__chart fl">
			<zchart :chartId="chart01.chartId" :options="chart01.chartoptions" style="width:100%;height:100%"></zchart>
		</div>
		<div class="zHome-recommend fl">
			<div class="zHome-recommend__info clearfix">
				<span class="info-logo fl">
						<img :src="personal.logo" alt="">
				</span>
				<div class="info-main clearfix">
					<p class="info-main__name">{{personal.name}}</p>
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
		<div class="zHome-rank fl">
			<div class="zHome-rank__head clearfix">
				<h4 class="fl">排行榜</h4>
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
		<div class="zHome-aside__chart fl">
			<zchart :chartId="chart02.chartId" 
					:options="chart02.chartoptions" 
					:style="chart02Style"
					style="width:100%;height:48%">
			</zchart>
			<zchart :chartId="chart03.chartId" 
					:options="chart03.chartoptions" 
					:style="chart03Style"
					style="width:100%;height:48%">
			</zchart>
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
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
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
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""},
					{text:"苹果",num:23,chart:""}
				],
				chart01:{
					chartId:"chart",
					chartoptions:{
			            color:["#bfc2cd"],
			            xAxis: {
			                data: ["布偶猫","折耳猫","英短猫","波斯猫","短毛猫","蓝猫","挪威猫","缅因猫","埃及猫","美短猫","孟买猫"]
			            },
			            series: [{
			                name: '点击量',
			                type: 'bar',
			                data: [5, 20, 36, 10, 10, 20,10, 20,12,34,45]
			            }]
					}
				},
				chart02:{
					chartId:"chart02",
					chartoptions:{
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
					}
				},
				chart02Style:{
					'padding': '10px',
					'background-color': '#d6aaaa',
					'color':'#fff',
					'border-radius': '5px'
				},
				chart03:{
					chartId:"chart03",
					chartoptions:{
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
					}
				},
				chart03Style:{
					'margin-top': '2%',
					'padding': '10px',
					'background-color': '#6cb2d9',
					'color':'#fff',
					'border-radius':' 5px'
				}
			}
		},
		methods : {
		}
	}
</script>
