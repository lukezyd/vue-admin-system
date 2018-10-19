<template>
	<div class="login-test">
		<el-form :model="loginForm" :rules="rulesList" ref="loginForm">
			<el-form-item  label="活动名称" prop="name">
				<el-input v-model="loginForm.name"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="loginForm.password"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="login">ok</el-button>				
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		name:"ltest",
		data() {
			return {
				loginForm:{
					name:'',
					password:'',
				},
				rulesList:{
					name:[{required:true,message: '请输入活动名称', trigger: 'blur'}],
					password:[{required:true, trigger: 'blur'}]
				}
			}
		},
		methods:{
			login(){
				this.$refs.loginForm.validate((valid) => {
					if(valid){
						alert("ok")
					}else{
						alert("false");
					}
				})
			}
		}
	}
</script>
<!-- 
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>
 -->