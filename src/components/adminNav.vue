<template>
	<div class="nav-box" v-bind:class="navLocaltion">
   		<div class="nav">
		    <side-bar></side-bar>
		</div>
 	</div>
</template>

<script>
	import sideBar from './sideBar/index'
	export default{
		name :"adminNav",
		components:{
			sideBar
		},
		data(){
			return {
				navshow:true,
				authorityList: [],
				navLocaltion:"nav-left"
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
			},
			
			toPage: function(path){
				this.$router.push(path);
			}
		}
	};
</script>
	
<style>
.nav-box{
  background: #2a3542;
  position: relative;
  width:210px;
}
.nav-left{
  float: left;
  max-width: 350px;
  height: calc(100% - 60px);
  overflow: hidden;
  z-index: 999;
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

.nav{
  width: 190px;
  margin: 0 auto;
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
	padding: 20px 0;
	width:100%;
	background: #2a3542;
	border-right: none;
	color:#fff;
}
.nav li{
	line-height: 45px;
	color:#fff;
	cursor: pointer;
	text-align: left;
    margin-bottom: 15px;
    font-size: 14px;
    position: relative;
}
.nav li .el-submenu__title{
	color:#fff;
}
.nav .el-menu-item{
	border-radius: 3px;
	height: 45px;
}
.nav .el-submenu .el-submenu__title{
	height: 45px;
	line-height: 45px;
	border-radius: 3px;
}
.nav .el-submenu .el-submenu__title:hover{
	background: #7fced2;
	color:#fff;
}
.nav .el-submenu .el-submenu__title:hover .fa{
	color:#fff;
}
.nav .el-menu-item.is-active{
	background: #7fced2;
	color:#fff;
}

.nav .el-menu-item:hover{
	background: #7fced2;
	color:#fff;
}
.nav .el-menu-item:hover .fa{ 
	color:#fff;
}
.el-menu-item-group ul{
	padding: 0;
}
.el-menu-item-group li{
	margin-bottom:10px;
}
.nav .el-submenu ul{
	padding: 0;
}
.nav li .fa{margin:0px 10px;}
.el-submenu .el-menu-item{min-width: auto;}
</style>
