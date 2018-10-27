<template>
	<div class="crumbs" >
		<div class="crumbs-box">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item  v-for="(item, index) in pathList" v-if="item.text" :key="index" :data-path='JSON.stringify(item.basePath)' :to='item.basePath'>
			  	{{item.text}}
			  </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>

<script>
import crumbLists from './index'
export default{
	name:"crumbs",
	mixins:[crumbLists]
};
</script>

<style>
	.crumbs{
		position: relative;
		background-color: #fff;
		height: 40px;
		border-bottom: 1px solid #ddd;
		padding: 0 20px;
	}
	.crumbs-box{
		height: 100%;overflow: hidden;
		padding: 0 12px;
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