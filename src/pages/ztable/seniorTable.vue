<template>
	<div class="ztable">
		<div class="breadcrumb">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/index' }">表格</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: '/index' }">选项一</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="ztable-search">
			<table-search></table-search>
		</div>
		<div class="ztable-main">
			<table-complexest></table-complexest>
		</div>
	</div>
</template>
<script>
	import tableSearch from './components/search'
	import tableComplexest from './components/complex-est'

	export default {
		name:'ztable',
		components:{
			tableSearch,
			tableComplexest
		},
		data (){
			return {
				formInline: {
		          user: '',
		          region: '',
		          age:''
		        }
			}
		},
		methods:{
			onSubmit: function(){

			}
		}
	}
</script>
<style>
	.ztable-main{
		padding: 0 10px;
	}
	.el-table__header{
		border-top: 1px solid #ebeef5;
	}
	.el-table__header th{
		background: #f5f5f5;
	}
	.el-table__header .cell{
		text-align: center;
	}
	.el-table__body-wrapper .cell{
		text-align: center;
	}
</style>