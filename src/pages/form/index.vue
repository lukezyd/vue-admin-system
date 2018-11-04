<template>
	<div class="zform">
		<div class="zform-step">
			<el-steps :active="active" finish-status="success">
			  <el-step title="步骤 1" description="基本信息"></el-step>
			  <el-step title="步骤 2" description="其他信息"></el-step>
			  <el-step title="步骤 3" description="完成"></el-step>
			</el-steps>
		</div>
		<keep-alive>
			<router-view @showNext="showNext"></router-view>
		</keep-alive>
		<el-button v-show="active != 3"  :disabled="!isDisabled" type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>
	</div>
</template>
<script>
 export default {
 	data() {
 		return {
 			active:0,
 			isDisabled:false
 		}
 	},
 	mounted(){
 		console.log(this.$route.fullPath);
 		var path = this.$route.fullPath;
 		if(path == '/zform/primary'){
 			this.active = 0;
 		}
 	},
 	created(){
 		console.log(this.$store.state.form.stepIndex)
 		if(this.active == 0){
 			this.$router.push('/zform/primary');
 		}
 	},
 	methods:{
 		next() {
	       this.active++;
	       if(this.active == 1){
			this.$router.push('/zform/second');
			this.isDisabled =  false;
	       }
	       if(this.active == 2){
	       	this.$router.push('/zform/third');
	       }
	       if(this.active == 3){
	       	this.$router.push('/zform/complete');
	       }
	       this.$store.commit('setStepIndex',this.active);
	    },
	    showNext: function(isDisabled){
	    	this.isDisabled = isDisabled;
	    }
 	}
 };
</script>
<style>
	.zform{
		padding:20px;
	}
	.zform-step{
		width:85%;
		margin: 30px auto;
		padding-bottom: 50px;
	}
	.el-step__icon.is-text{
		position: absolute;
    	left: 0;
	}
	.el-step__main{
		margin-top: 24px;
    	margin-left: -12px;
	}
</style>