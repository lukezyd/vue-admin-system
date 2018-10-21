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
			<table-simple></table-simple>
			<table-complex></table-complex>
			<table-complexest></table-complexest>
		</div>
	</div>
</template>
<script>
	import tableSearch from './components/search'
	import tableSimple from './components/simple'
	import tableComplex from './components/complex'
	import tableComplexest from './components/complex-est'

	export default {
		name:'ztable',
		components:{
			tableSearch,
			tableSimple,
			tableComplex,
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
		padding: 0 20px;
	}
</style>