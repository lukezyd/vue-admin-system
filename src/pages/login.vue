<template>
	<div class="login-bg">
		<div class="login">
			<el-form :rules="rulesList" :model="loginForm" ref="loginForm">
				<div class="login-content">
					<div class="login-item"><span class="login-logo">vue admin system</span></div>
					<el-form-item prop="account" class="login-item">
						<el-input v-model="loginForm.account" class="account" placeholder="用户名"></el-input>
					</el-form-item>
					<div class="login-item">
						<el-form-item prop="password" class="login-item">
							<el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
						</el-form-item>
					</div>
					<el-form-item class="login-item remember-box">
						<el-checkbox v-model="rememberMe">记住密码</el-checkbox>
						<p class="login-item_error" v-show="loginError">{{errorText}}</p>
					</el-form-item>
					<el-form-item class="login-item">
						<el-button type="primary" class="login-btn"  @click.native.prevent="login">登录</el-button>
					</el-form-item>
				</div>
			</el-form>
		</div>	
	</div>
</template>
<script>
	export default {
		name: "login",
		data: function(){
			const validatorFn = function(rule, val, callback){
				if(val.length < 6){
					alert('不能少于六位');
				}
			}
			return {
				loginForm:{
					account:'',
					password:''
				},
				rememberMe:false,
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
						this.$axios.post('/login',{
							account:self.loginForm.account;,
							password:self.loginForm.password;
						}).then(function(response){
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
	}
</script>
<style>
	.login-bg{width: 100%;height: 100%;overflow: hidden;
		background: url(/static/images/login.jpg) no-repeat;background-size: 100% 100%;
	}
	.login{
		padding: 20px 0;
		width: 560px;
		right:0;
		height:420px;background:rgba(80, 119, 125, 0.5);position: absolute;top: 30%;
	}
	.login-content{
		padding: 15px 70px;
		width: 450px;
		height: 350px;
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
		height: 60px;
		margin: 10px auto;
		font-size: 30px;
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
	.login-item_error{
		color:red;
		display: inline-block;
		font-size: 13px;
   		margin-left: 20px;
   	}
	.login-item input{
		/*width: 70%;*/
		height: 32px;
		border:1px solid #ddd;
		border-radius: 3px;
		padding: 3px 7px;
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
	.remember-box{text-align: left;}
	.el-checkbox__inner{width: 16px;height: 16px;}
	.el-checkbox__inner::after{height: 8px;left: 5px;top:2px;}
</style>
