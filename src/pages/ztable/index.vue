<template>
	<div class="ztable">
		
		<div class="ztable-main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		name:'ztable',
		data (){
			return {
			}
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
