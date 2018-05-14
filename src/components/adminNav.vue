<template>
	<div class="nav">
		<div class="logo"><span>LOGO BOX</span></div>
		<div class="nav-toggle" @click="toggleNav()"><span class="el-icon-menu"></span></div>
		<ul>
			<li>首页</li>
			<li>page01</li>
			<li>page02</li>
			<li>page03</li>
			<li>page04</li>
			<li>page05</li>
			<li>page06</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name :"adminNav",
		data(){
			return {
				navshow:true
			}
		},
		methods:{
			toggleNav:function(){
				var self = this;
				this.navStatus =  !this.navStatus;
				this.$emit("navToggle",self.navStatus);
			}
		}
	}
</script>

<style>
    .nav .logo{
    	color: #fff;
	    height: 60px;
	    width: 70%;
	    line-height: 60px;
	    border: 2px solid #fff;
	    margin-bottom: 10px;
	    float: left;
    }
    .nav-toggle{
    	float: right;
    	padding: 10px;
    	cursor: pointer;
    }
    .el-icon-menu{
    	color:#fff;
    	font-size: 26px;
    }
    .nav ul{
    	clear: both;
    }
	.nav li{
		height: 50px;
		line-height: 50px;
		color:#fff;
		cursor: pointer;
	}
	.nav li:hover{
		background: #d27f7f;
		color:#fff;
	}
</style>
