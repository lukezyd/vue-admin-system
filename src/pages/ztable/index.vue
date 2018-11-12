<template>
	<div class="ztable">
		
		<div class="ztable-main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import { catType } from '@/api/ztable'
	export default {
		name:'ztable',
		data (){
			return {
			}
		},
		created(){
			catType().then( response => {
				this.$store.commit('setCatType',response._catType);
			}).catch(error => {
				console.log(error);
			});
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
