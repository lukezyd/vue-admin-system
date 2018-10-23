<template>
	<div class="zHome clearfix">
		<div class="breadcrumb">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zHome-datasum clearfix" >
			<sum-data></sum-data>
		</div>
		<div class="zHome-main__chart fl">
			<main-chart></main-chart>
		</div>
		<div class="zHome-recommend fl">
			<champion></champion>
		</div>
		<div class="zHome-other__chart fl">
			<other-chart></other-chart>
		</div>
		<div class="zHome-timeline fl">
			<time-line></time-line>
		</div>
		<div class="zHome-rank fl">
			<div class="zHome-rank__head clearfix">
				<h4 class="fl">周排行榜</h4>
			</div>
			<ul>
				<li v-for="(item,i) in tagList">
					<span>{{i + 1}}</span>
					<span>{{item.text}}</span>
					<span><i class="rank-number" :style="item.style">{{item.num}}</i></span>
					<span>{{item.chart}}</span>
				</li>
			</ul>
		</div>
		<div class="zHome-aside__chart fr">
			<side-chart></side-chart>
		</div>
	</div>
</template>
<script>
	import sumData from './module/sumdata'
	import mainChart from './module/mainChart'
	import champion from './module/champion'
	import sideChart from './module/sideChart'
	import otherChart from './module/otherChart'
	import timeLine from './module/timeLine'

	export default {
		name :"home",
		components:{
			sumData,
			mainChart,
			champion,
			sideChart,
			otherChart,
			timeLine
		},
		data(){
			return {
				tagList:[
					{text:"苹果",num:'23%',chart:"",style:{"background":"#88d6de"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#c8de88"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#deac88"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#88aade"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#a571bf"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#c3c28f"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#4cc361"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#379cbb"}},
					{text:"苹果",num:'23%',chart:"",style:{"background":"#e65656"}},
				],
			}
		},
		mounted:function(){
		},
		watch:{
			
		},
		methods : {
			addAnimation: function(){

			}
		},
		beforeDestroy () {
		},
	}
</script>

<style>

.rank-number{
    padding: 3px 15px;
    background: #ddd;
    border-radius: 20px;
    height: 26px;
    line-height: 20px;
    font-style: normal;
    display: inline-block;
    font-size: 14px;
    color:#fff;
}
.color01{
	background: #88d6de;
}
.color02{
	background: #88d6de;
}
.color03{
	background: #88d6de;
}
.color04{
	background: #88d6de;
}
.color05{
	background: #88d6de;
}
</style>
