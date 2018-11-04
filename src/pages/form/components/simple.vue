<template>
	<div class="simple-form">
		<el-form :model="catForm" :rules="rules" ref="catForm" label-width="100px" >
		  <el-form-item label="猫咪名称" prop="name">
		    <el-input v-model="catForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="种类" prop="type">
		    <el-select v-model="catForm.type" placeholder="种类">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
       <el-form-item label="性别" prop="sex">
        <el-select v-model="catForm.sex" placeholder="性别">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
		  <el-form-item label="领养时间" required>
		    <el-col :span="11">
		      <el-form-item prop="date1">
		        <el-date-picker type="date" placeholder="选择日期" v-model="catForm.date" style="width: 100%;"></el-date-picker>
		      </el-form-item>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="备注" prop="mark">
		    <el-input type="textarea" v-model="catForm.mark"></el-input>
		  </el-form-item>
      <el-form-item label="说明信息" prop="remark">
        <el-input type="textarea" v-model="catForm.remark"></el-input>
      </el-form-item>
		</el-form>
	</div>
</template>
<script>
 export default {
    data() {
      return {
        catForm: {
          name: '',
          type: '',
          date: '',
          sex: '',
          mark: '',
          remark:''
        },
        rules: {
          name: [
            { required: true, message: '请输入猫咪名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ]
        }
      };
    },
    computed:{
      catFormVal: function(){
        if(this.catForm.name &&  this.catForm.type &&  this.catForm.date &&  this.catForm.sex ){
         return true;
        }else{
          return false;
        }
      },
    },
    watch:{
      catFormVal: function(val){
        this.$emit('showNext',val);
      }
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
      }
    }
  };
</script>
<style scope>
  .simple-form{
    width:60%;margin: 0 auto;
  }
  .el-form-item{
    text-align: left;
  }
</style>