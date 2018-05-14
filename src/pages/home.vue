<template>
	<div class="home">
		<div class="home-nav" v-bind:class="navLocaltion">
			<adminNav @navToggle="navToggles"></adminNav>
			<!-- <div class="nav-setting" @click="changenav()"><i class="el-icon-setting"></i></div> -->
		</div>
		<div class="home-main">

		</div>
	</div>
</template>
<script>
	import adminNav from "../components/adminNav" 
	export default {
		name :"home",
		data(){
			return {
				navLocaltion:''
			}
		},
		components:{
			adminNav
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
			},
			navToggles: function(options){
				if(options){
					this.navLocaltion = "nav-left"
				}else{
					this.navLocaltion = "nav-icon nav-left";
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
		background: #353535;
		height: 100%;
		position: relative;
	}
	.nav-left{
		float: left;
		width: 20%;
		max-width: 350px;
		height: 100%;
		min-width: 230px;
	}
	.nav-top{
		height: 60px;
		width: 100%;
	}
	.nav-icon{
		margin-left: -15%;
	}
	.nav-icon .nav-toggle{
		margin-right: 14px;
	}
	.nav-setting{
		display: inline-block;
		width: 100%;
		height: 30px;
		line-height: 30px;
	    background: #848484;
	    right: 0;
	    bottom: 0;
	    color: #ddd;
	    position: absolute;
	    cursor:pointer; 
	}
	.nav-setting i{
		font-size: 20px;
	}
	.home-main{
		position: relative;
		overflow: hidden;
		background: #fff;
		height: 100%;
	}
</style>