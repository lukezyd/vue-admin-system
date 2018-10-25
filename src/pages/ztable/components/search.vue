<template>
	<div class="search">
		<div class="ztable-search">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="审批人">
			    <el-input v-model="formInline.age" placeholder="审批人"></el-input>
			  </el-form-item>
			   <el-form-item label="审批人">
			    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			  </el-form-item>
			  <el-form-item>
			    <el-button  @click="toggleMore">{{showText}}</el-button>
			  </el-form-item>
				  <div class="more-search" v-show="showMore">
					  <el-form-item label="审批人">
					    <el-input v-model="formInline.age" placeholder="审批人"></el-input>
					  </el-form-item>
					   <el-form-item label="审批人">
					    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
					  </el-form-item>
					  <el-form-item label="活动区域">
					    <el-select v-model="formInline.region" placeholder="活动区域">
					      <el-option label="区域一" value="shanghai"></el-option>
					      <el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				  	  </el-form-item>
				  </div>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		name:'zsearch',
		data (){
			return {
		        showMore:false,
		        showText:'高级查询',
		        formInline: {
		          user: '',
		          region: '',
		          age:''
		        }
			}
		},
		watch:{
			showMore: function(){
				console.log(this.showMore)
				this.showMore ? this.showText = '收起' : this.showText =  '高级查询';
			}
		},
		methods:{
			onSubmit: function(){
				
			},
			toggleMore: function(){
				this.showMore = !this.showMore;
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
	}
	.el-button{
		height: 34px;
		line-height: 0;
	}

	.more-search{
		margin-top: 15px;
	}
</style>