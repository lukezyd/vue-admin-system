<template>
	<div class="login-bg">
		<div class="login">
			<el-form :rules="rulesList" :model="loginForm" ref="loginForm">
				<div class="login-content">
					<div class="login-item"><span class="login-logo">vue admin system</span></div>
					<el-form-item prop="account" class="login-item">
						<span class="fa fa-user-o"></span>
						<el-input v-model="loginForm.account" class="account" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-item" style="margin-bottom: 0">
						<span class="fa fa-key fa-fw"></span>
						<el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
					</el-form-item>
					<div class="login-error">
						<p class="login-item_error" v-show="loginError">{{errorText}}</p>
					</div>
					<el-form-item class="login-item">
						<el-button type="primary" class="login-btn"  @click.native.prevent="login">登录</el-button>
					</el-form-item>
				</div>
			</el-form>
		</div>	
	</div>
</template>
<script>
	import { loginFn } from '@/api/login'
	export default {
		name: "login",
		data: function(){
			return {
				loginForm:{
					account:'admin',
					password:'123456'
				},
				errorText:'',
				loginError:false,
				rulesList:{
					account:[{ required:true, message:'账号不能为空',trigger:'blur'}],
					password:[{ required:true, message:'密码不能为空',trigger:'blur'}]
				}
			}
		},
		methods: {
			login:function(){
				var self = this;
				this.$refs.loginForm.validate((valid) => {
					if(valid){
						loginFn({
							account:self.loginForm.account,
							password:self.loginForm.password
						}).then(function(response){
							if(response.code == 200){
								self.$router.push('/home');
								self.$store.commit('setToken',response.token);
							}else{
								self.errorText = response.msg;
								self.loginError = true;
								console.log(response)
							}
						}).catch(function(error){
							console.log(error);
						});

					}else{
						return false;
					}
				})
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
	};
</script>
<style >
	.login-bg{width: 100%;height: 100%;overflow: hidden;
		background: url(/static/images/login.jpg) no-repeat;background-size: 100% 100%;
	}
	.login{
		padding: 20px 0;
		width: 470px;
		right:20px;
		height:370px;position: absolute;top: 30%;
	}
	.login-content{
		padding: 15px 70px;
		width: 450px;
		height: 300px;
		background: #fdfdfd;
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate(-50%,-50%);
		right:200px;
		border-radius: 3px;
	}
	.login-logo{
		display: inline-block;
		height: 54px;
		margin: 8px auto;
		font-size: 30px;
    	line-height: 60px;
    	color: #4cadcc;
    	border-radius: 3px;
	}
	.login-item{
		position: relative;
		width: 100%;
		text-align: center;
	    font-size: 15px;
	}
	.login-error{
		height: 35px;
	}
	.login-item_error{
		color:red;
		font-size: 14px;
   		text-align: left;
   		line-height: 40px;
   	}
	.login-item input{
		height: 32px;
		border:1px solid #ddd;
		border-radius: 3px;
		padding: 3px 28px !important;
		outline: none;
	}
	.login-item .login-btn{
		width: 100%;
		height: 36px;
		background: #81b38a;
	    color: #fff;
	    cursor:pointer;
	}
	.login-btn:hover{
		background: #5e9267;
	}

	.login .fa{position: absolute;z-index: 999;top: 12px;left: 8px;color:#7d7d7d;}
	.remember-box{text-align: left;margin-bottom: 5px;}
	.el-checkbox__inner{width: 16px;height: 16px;}
	.el-checkbox__inner::after{height: 8px;left: 5px;top:2px;}
</style>
