<template>
	<div class="search">
		<div class="ztable-search">
			<el-form :inline="true" ref="catForm" :model="catForm" >
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
			    <el-button  @click="resetForm('catForm')">重置</el-button>
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
		        catForm: {
		          name: '',
		          type: '',
		          date:''
		        },
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
			},
			resetForm:function(form){
				this.$refs[form].resetFields();
				// this.$emit("reset");
			}
		}
	};
</script>
