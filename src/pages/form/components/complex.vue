<template>
	<div class="second-form">
		<el-form :model="catForm" :rules="rules" ref="catForm" label-width="100px" >
		  <el-form-item label="参与展览" prop="show">
		    <el-switch v-model="catForm.show"></el-switch>
		  </el-form-item>
		  <el-form-item label="日常护理" prop="nursing">
		    <el-checkbox-group v-model="catForm.nursing">
		      <el-checkbox label="护理1" name="nursing"></el-checkbox>
		      <el-checkbox label="护理2" name="nursing"></el-checkbox>
		      <el-checkbox label="护理3" name="nursing"></el-checkbox>
		      <el-checkbox label="护理4" name="nursing"></el-checkbox>
		    </el-checkbox-group>
		  </el-form-item>
		  <el-form-item label="疫苗" prop="remind">
		    <el-radio-group v-model="catForm.remind">
		      <el-radio label="0" >不提醒</el-radio>
		      <el-radio label="1" >提醒注射</el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item v-show="isRemind" label="领养时间" required>
		    <el-col :span="11">
		      <el-form-item prop="date">
		        <el-date-picker type="date" placeholder="选择日期" v-model="catForm.date" style="width: 100%;"></el-date-picker>
		      </el-form-item>
		    </el-col>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
 export default {
    data() {
      return {
        catForm: {
          show: true,
          nursing: [],
          remind:'0',
          date: '',
        },
        rules: {
          show: [
            { required: true,trigger: 'blur' },
          ],
          nursing: [
            {  type: 'array', required: true, message: '请至少选择一项护理', trigger: 'change'}
          ],
          remind: [
            {required: true, message: '', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ]
        }
      };
    },
    computed:{
      isRemind: function(){
      	return this.catForm.remind == '0' ? false : true;
      },
      catFormVal: function(){
        if(this.catForm.nursing.length && ( (this.catForm.remind == '1' && this.catForm.date) || this.catForm.remind == '0')){
          return true;
        }else{
          return false;
        }
   	  }
    },
    watch:{
      catFormVal: function(val){
        this.$emit('showNext',val);
      }
    },
    methods: {
    }
  };
</script>
<style scope>
  .second-form{
    width:70%;margin: 0 auto;
  }
  .el-form-item{
    text-align: left;
  }
</style>