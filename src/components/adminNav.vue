<template>
	<div class="nav-box" v-bind:class="navLocaltion">
   		<div class="nav">
		    <el-menu
		      default-active="1"
		      @open="handleOpen"
		      @close="handleClose"
		     >
		     <el-menu-item index="1" @click="toPage('/')">
		        <i class="fa fa-dashboard"></i>
		        <span slot="title">首页</span>
		      </el-menu-item>
		      <el-submenu index="2">
		        <template slot="title">
		          <i class="fa fa-dashboard"></i>
		          <span>表格</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="1-1" @click="toPage('/primaryTable')" >初级表格</el-menu-item>
		          <el-menu-item index="1-2" @click="toPage('/secTable')">中级表格</el-menu-item>
		          <el-menu-item index="1-3" @click="toPage('/seniorTable')">高级表格</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      
		      <el-menu-item index="3" >
		        <i class="fa fa-dashboard"></i>
		        <span slot="title">表单</span>
		      </el-menu-item>
		      <el-menu-item index="4">
		        <i class="fa fa-dashboard"></i>
		        <span slot="title">导航四</span>
		      </el-menu-item>
		    </el-menu>
		</div>
 	</div>
</template>

<script>
	export default{
		name :"adminNav",
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
			handleOpen: function(){

			},
			handleClose: function(){

			},
			toPage: function(path){
				this.$router.push(path);
			}
		}
	}
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
/*.nav li a{
	display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0 20px;
	border-radius: 3px;
}
.nav li .fa-plus{
	margin-top: 16px;
}
.nav li .fa{margin-right: 10px;}
.nav li.active a{
	background: #7fced2;
	color:#fff;
}
.nav li:hover > a{
	background: #7fced2;
	color:#fff;
}
.nav .secondary-nav{
	position: relative;
	padding: 0;
	display: none;
}
.nav .second-parent{
	padding: 0 20px;
	border-radius: 3px;
}
.nav .second-parent:hover{
	background: #7fced2;
	color:#fff;
}*/
</style>
