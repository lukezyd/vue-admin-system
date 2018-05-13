<template>
	<div class="home">
		<div class="home-nav" v-bind:class="navLocaltion">
			<span class="nav-setting" @click="changenav()"><i class="el-icon-setting"></i></span>
		</div>
		<div class="home-main">

		</div>
	</div>
</template>
<script>
	export default {
		name :"home",
		data(){
			return {
				navLocaltion:''
			}
		},
		created : function(){
			this.navLocaltion = localStorage.getItem(this.$store.state.siteId + "_nav") || "nav-left"
		},
		methods : {
			changenav : function(){
				if(this.navLocaltion == "nav-left"){
					this.navLocaltion = "nav-top";
					localStorage.setItem(this.$store.state.siteId + "_nav","nav-top");
				}else{
					this.navLocaltion = "nav-left";
					localStorage.setItem(this.$store.state.siteId + "_nav","nav-left");
				}
			}
		}
	}
</script>

<style>
	.home{
		height: 100%;
		width: 100%;
		position: relative;
	}
	.home-nav{
		background: #ddd;
		height: 100%;
		position: relative;
	}
	.nav-left{
		float: left;
		width: 20%;
		max-width: 350px;
		height: 100%;
	}
	.nav-top{
		height: 60px;
		width: 100%;
	}
	
	.nav-setting{
		display: inline-block;
		width: 30px;
		height: 30px;
		line-height: 30px;
	    background: #fff;
	    right: 0;
	    position: absolute;
	    cursor:pointer; 
	}
	.nav-setting i{
		font-size: 20px;
	}
	.home-main{
		position: relative;
		overflow: hidden;
		background: #eee;
		height: 100%;
	}
</style>