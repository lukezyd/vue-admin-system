<template>
	<div class="nav-box" v-bind:class="navLocaltion">
   		<div class="nav">
			<ul>
				<li class="active">首页</li>
				<li v-for="auth in authorityList">
					{{auth}}
				</li>
			</ul>
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
			}
		}
	}
</script>
	
<style>

.nav-box{
  background: #2a3542;
  position: relative;
}
.nav-left{
  float: left;
  width: 210px;
  max-width: 350px;
  height: calc(100% - 60px);
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
}
.nav li{
	height: 50px;
	line-height: 50px;
	color:#fff;
	cursor: pointer;
}
.nav li.active{
	background: #7fced2;
	color:#fff;
}
.nav li:hover{
	background: #7fced2;
	color:#fff;
}
</style>
