<template>
	<div class="ztable">
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
	export default {
		name:'ztable',
		data (){
			return {}
		},
		components:{
			tableSearch
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
