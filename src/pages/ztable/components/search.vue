<template>
	<div class="search">
		<div class="ztable-search">
			<el-form :inline="true" :rules="rules" ref="catForm" :model="catForm" >
			  <el-form-item label="姓名" prop="name">
			    <el-input v-model="catForm.name" placeholder="姓名"></el-input>
			  </el-form-item>
			  <el-form-item label="种类" prop="type">
			    <el-select v-model="catForm.type" placeholder="种类">
			      <el-option v-for="ctype in catType" :label="ctype.text" :value="ctype.value" :key="ctype.text"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="时间"  prop="date">
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
		computed:{
		    catType: function(){
		      return this.$store.state.table.catType;
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
.ztable-search .el-form-item {
  width: 20%;
}

.ztable-search .el-form--inline .el-form-item__content {
  width: 80%;
}

.ztable-search .el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.ztable-search .el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 100%;
  position: relative;
  top: 3px;
}

.ztable-search .btn-box {
  width: 30% !important;
}
</style>
