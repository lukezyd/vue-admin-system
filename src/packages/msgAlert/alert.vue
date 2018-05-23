<template>
	<div class="alert" if-show="showAlert">
		<div class="alert-box">
			this is a valert
			<slot name="alertMain"></slot>			
		</div>
	</div>
</template>

<script>
	export default {
		name :"valert",
		props:{
			showAlert:{
				type:Boolean,
				require:false,
				default:false
			}
		},
		data () {
			return {

			}
		}
	}
</script>

<style>
	.alert{
		position: absolute;
		left: 50%;
		top:45%;
	}
	.alert-box{
		width: 100px;
		height:80px;
		color:red;
	}
</style>