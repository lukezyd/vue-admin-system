<template>
	<div class="login-bg">
		<div class="login">
			<div class="login-content">
				<div class="login-item"><span class="login-logo">vue admin system</span></div>
				<div class="login-item">
					<el-input v-model="account" class="account" placeholder="用户名"></el-input>
				</div>
				<div class="login-item">
					<el-input v-model="password" type="password" placeholder="密码"></el-input>
				</div>
				<div class="login-item remember-box">
					<el-checkbox v-model="rememberMe">记住密码</el-checkbox>
					<p class="login-item_error" v-show="loginError">{{errorText}}</p>
				</div>
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
				account:'',
				password:'',
				rememberMe:false,
				errorText:'',
				loginError:false
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
						self.$router.push('/index');
						self.$store.state.authorityList = isArray(response.data.authority) ? response.data.authority : (response.data.authority).split(',');
					}else{
						self.errorText = response.data.msg;
						self.loginError = true;
					}
				}).catch(function(error){
					console.log(error);
				});
			}
		},
		watch:{
			account:function(val,oldval){
				if(val != oldval){
					this.errorText = '';
					this.loginError = false;
				}
			},
			password:function(val,oldval){
				if(val != oldval){
					this.errorText = '';
					this.loginError = false;
				}
			},
		}
	}
</script>
<style>
	.login-bg{width: 100%;height: 100%;overflow: hidden;background: url(/static/images/login.jpg) no-repeat;background-size: 100% 100%;}
	
	.login{
		padding: 20px 0;
		width: 100%;height:390px;background:rgba(80, 119, 125, 0.5);position: absolute;top: 30%;
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
		font-size: 34px;
    	line-height: 60px;
    	color: #81b38a;
    	border-radius: 3px;
	}
	.login-item{
		width: 100%;
		text-align: center;
		margin-bottom: 18px;
	    font-size: 15px;
	}
	.login-item_error{color:red;display: inline-block;font-size: 13px;
    margin-left: 20px;}
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
