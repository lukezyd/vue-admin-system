<template>
	<div class="search">
		<div class="ztable-search">
			<el-form :inline="true" :rules="rules" ref="catForm" :model="catForm" >
			  <el-form-item label="姓名" prop="name">
			    <el-input v-model="catForm.name" placeholder="姓名"></el-input>
			  </el-form-item>
			  <el-form-item label="种类" prop="type">
			    <el-select v-model="catForm.type" placeholder="种类">
			      <el-option label="折耳猫" value="1"></el-option>
			      <el-option label="英短猫" value="2"></el-option>
			      <el-option label="波斯猫" value="3"></el-option>
			      <el-option label="布偶猫" value="4"></el-option>
			      <el-option label="短毛猫" value="5"></el-option>
			      <el-option label="挪威猫" value="6"></el-option>
			      <el-option label="缅因猫" value="7"></el-option>
			      <el-option label="埃及猫" value="8"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="领养时间"  prop="date">
			    <el-date-picker
			      v-model="catForm.date"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			    <el-button @click="resetForm('catForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		name:'zsearch',
		data (){
			return {
		        catForm: {
		          name: '',
		          type: '',
		          date:''
		        },
		        rules: {}
			}
		},
		methods:{
			onSubmit: function(){
				if(this.catForm.name || this.catForm.type || this.catForm.date){
					this.$emit("search",this.catForm);
				}
			},
			resetForm:function(form){
				this.$refs[form].resetFields();
				this.$emit("reset");
			}
		}
	};
</script>
<style>
	.search{

	}
	.ztable-search{
		margin-bottom: 25px;
		text-align: left;
	}
	.search .el-form-item{
		margin-bottom: 0;
		margin-left: 10px;
	}
	.el-input__inner{
		height: 34px;
		line-height: 34px;
		border-radius: 3px;
		padding: 0 10px;
	}
	.el-button{
		height: 34px;
		line-height: 0;
	}

	.more-search{
		margin-top: 15px;
	}
	.el-date-editor .el-range-separator{
		line-height: 27px;width: 10%;
	}
</style>