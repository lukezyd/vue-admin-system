<template>
	<header class="zHeader clearfix">
		<span class="zHeader-setting fl">
			<i class="fa fa-bars fa-2x"></i>
		</span>
		<h2 class="zHeader-title fl"><i class="red">Z</i>ADMIN</h2>
		<div class="zHeader-person  fr">
			<div class="person-search fl">
				<span class="person-search__icon" >
					<i class="fa fa-search"></i>
				</span>
				<input class="person-search__ipt" placeholder="搜索"  type="text"
					   @blur="hideSearch" 
					   @focus="search" 
					   :class="{'person-search__ipt--hide':showSearch}">
			</div>
			<div class="person-box fl clearfix" @click="more">
				<span class="person-box__img">
					<img src="/static/images/p_logo.jpg" alt="">
				</span>
				<span class="person-box__name">eidonlon</span>
				<i class="fa fa-caret-down"></i>
				<div class="person-box__more" v-show="showMore">
					<ul class="more-item">
						<li>资料<i class="fa fa-credit-card"></i></li>
						<li>设置<i class="fa fa-cog"></i></li>
						<li>消息<i class="fa fa-bell-o"></i></li>
					</ul>
					<div class="more-logout" @click="logout">
						退出登陆
						<i class="fa fa-sign-out"></i>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	import { logoutFn } from '@/api/login'
	export default{
		name:"adminHeader",
		data(){
			return {
				showSearch:true,
				showMore:false
			}
		},
		methods:{
			search: function(){
				this.showSearch = false;
			},
			hideSearch: function(){
				this.showSearch = true;
			},
			more: function(){
				this.showMore = !this.showMore;
			},
			logout: function(){
				this.$confirm('确定要退出登陆么?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          logoutFn().then(response => {
		          	this.$message({
			            type: 'success',
			            message: '退出成功!'
			         });
		          	if(response.code == 200){
		          		this.$router.push('/');
		          	}
		          },error => {
		          	this.$message({
		          		type: 'error',
		           		message: '退出登录失败'
		          	})
		          });
		          this.$store.commit('logout');
		        }).catch((err) => {
		        	console.log(err)
		          this.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
				
			}
		}
	};
</script>
