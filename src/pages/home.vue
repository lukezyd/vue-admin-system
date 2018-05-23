<template>
	<div class="home">
		<div class="home-nav" v-bind:class="navLocaltion">
			<adminNav @navToggle="navToggles"></adminNav>
			<!-- <div class="nav-setting" @click="changenav()"><i class="el-icon-setting"></i></div> -->
		</div>
		<div class="home-main">
			<v-select :lists="lists" @selected="selected"></v-select>
			<input type="text" class="hide" v-model="selectId">
		</div>
		<!-- <v-alert :showAlert="showAlert">
			<div slot="alertMain">
				<ul>
					<li>124124</li>
					<li>124124</li>
					<li>124124</li>
				</ul>
			</div>
		</v-alert> -->
	</div>
</template>
<script>
	import adminNav from "../components/adminNav"
	export default {
		name :"home",
		data(){
			return {
				navLocaltion:'',
				lists:[
					{id:1,text:"aaaaaaa"},
					{id:2,text:"bbbbbbb"},
					{id:3,text:"cccccccc"},
					{id:4,text:"ddddddddd"},
					{id:5,text:"eeeeeeeeee"}
				],
				showAlert:true,
				selectId:''
			}
		},
		components:{
			adminNav
		},
		created : function(){
			this.navLocaltion = localStorage.getItem(this.$store.state.siteId + "_nav") || "nav-left"
		},
		components:{
			adminNav
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
			},
			selected: function(id){
				this.selectId = id;
				console.log(this.selectId)
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
	    background-color: #ddd;
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