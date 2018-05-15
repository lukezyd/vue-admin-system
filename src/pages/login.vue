<template>
	<div class="login-bg">
		<div class="login">
			<div class="login-content">
				<div class="login-item"><span class="login-logo">vue admin system</span></div>
				<div class="login-item"><input v-model="account" placeholder="用户名" type="text" class="account"></div>
				<div class="login-item"><input v-model="password" placeholder="密码" type="password"></div>
				<div class="login-item remember-box"><el-checkbox v-model="rememberMe">记住密码</el-checkbox></div>
				<div class="login-item"><input @click="login()" class="login-btn" type="button" value="登录"></div>
			</div>
		</div>	
	</div>
</template>
<script>
	export default {
		name: "login",
		data: function(){
			return {
				account:"",
				password:"",
				rememberMe:false
			}
		},
		methods: {
			login:function(){
				var self = this;
				var account = this.account;
				var password = this.password;

				this.$axios.post('/login',{
					account:account,
					password:password
				}).then(function(response){
					console.log(response.data);
					if(response.data.code == 0){
						self.$router.push("/home");
						self.$store.state.authorityList = isArray(response.data.authority) ? response.data.authority : (response.data.authority).split(",");
					}
				}).catch(function(error){
					console.log(error);
				});
			}
		}
	}
</script>
<style>
	/*.login-bg{width: 100%;height: 100%;overflow: hidden;background: url(/static/images/bg.jpg) no-repeat;background-size: 100% 100%;}*/
	.login{
		width: 100%;height:350px;background: rgba(96, 160, 158, 0.5);position: absolute;top: 30%;
	}
	.login-content{
		padding: 15px;
		width: 500px;
		height: 350px;
		background: #fff;
		position: absolute;
		right:200px;
	}
	.login-logo{
		display: inline-block;
		width: 60%;
		height: 60px;
		margin: 15px auto;
		border:1px solid #ddd;
		/*临时*/
		font-size: 24px;
    	line-height: 60px;
    	color: #81b38a;
	}
	.login-item{
		width: 100%;
		text-align: center;
		margin-bottom: 18px;
	    font-size: 15px;
	}
	.login-item input{
		width: 70%;
		height: 32px;
		border:1px solid #ddd;
		border-radius: 3px;
		padding: 3px 7px;
		outline: none;
	}
	.login-item .login-btn{
		height: 36px;
		background: #81b38a;
	    color: #fff;
	    cursor:pointer;
	}
	.login-btn:hover{
		background: #5e9267;
	}
	.remember-box{text-align: left;margin-left: 15%;}
	.el-checkbox__inner{width: 16px;height: 16px;}
	.el-checkbox__inner::after{height: 8px;left: 5px;top:2px;}
</style>
