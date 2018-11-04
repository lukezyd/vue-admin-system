<template>
	<div class="second-form">
		<el-form  ref="catForm" label-width="100px" >
			<el-form-item label="其他信息1" prop="others01">
        <el-input v-model="catForm.others01"></el-input>
      </el-form-item>
      <el-form-item label="其他信息2" prop="others02">
        <el-input v-model="catForm.others02"></el-input>
      </el-form-item>
      <el-form-item label="其他信息3" prop="others03">
        <el-input v-model="catForm.others03"></el-input>
      </el-form-item>
		 </el-form>
	</div>
</template>
<script>
 export default {
 	data() {
      return {
        catForm: {
          others01: '',
          others02: '',
          others03: ''
        },
      };
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