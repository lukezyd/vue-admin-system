<template>
	<div class="nav">
		<!-- <div class="logo"><span>LOGO BOX</span></div> -->
		<div class="nav-toggle" @click="toggleNav()"><span class="el-icon-menu"></span></div>
		<ul>
			<li class="active">首页</li>
			<li v-for="auth in authorityList">
				{{auth}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name :"adminNav",
		data(){
			return {
				navshow:true,
				authorityList: []
			}
		},
		created:function(){
			//应从后台获取
			// this.authorityList  = ["page01","page02","page03","page04","page05"];
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
	.nav li.active{
		background: #d27f7f;
		color:#fff;
	}
	.nav li:hover{
		background: #d27f7f;
		color:#fff;
	}
</style>
