<template>
	<div class="ztable">
		<!-- <div class="breadcrumb">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/index' }">表格</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: '/index' }">选项一</el-breadcrumb-item>
			</el-breadcrumb>
		</div> -->
		<div class="ztable-search">
			<table-search></table-search>
		</div>
		<div class="ztable-main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import tableSearch from './components/search'
	import crumbs from "@/components/crumbs/crumbs"
	export default {
		name:'ztable',
		data (){
			return {
			}
		},
		components:{
			tableSearch,
		},
		beforeRouteUpdate (to, from, next){
			// console.log(to);
			next();
		},
		methods:{
			onSubmit: function(){

			}
		}
	};
</script>
<style>
	.ztable-main{
		padding: 0 20px;
	}
</style>