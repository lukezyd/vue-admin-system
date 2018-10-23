<template>
	<div class="crumbs" v-show="showCrumbs">
		<div class="crumbs-box">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>

<script>
	export default{
		name:"crumbs",
		props:{
			cList:{
				type:Array
			},
			showCrumbs:{
				type:Boolean
			}
		},
		data (){
			return{

			}
		},
		methods:{
			
		}
	};
</script>

<style>
	.crumbs{
		position: relative;
		background-color: #fff;
		height: 35px;
		border-bottom: 1px solid #ddd;
		padding: 0 20px;
	}
	.crumbs-box li{
		float: left;
		line-height: 35px;
		list-style: none;
		padding: 0 10px;
		cursor:pointer;
	}
	.crumbs-text{
		color:#7bcaf1;
	}
</style>