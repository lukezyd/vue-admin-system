<template>
	<div class="zform">
		<div class="zform-step">
			<el-steps :active="0">
			  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
			  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
			  <el-step title="步骤 3" description="这段就没那么长了"></el-step>
			</el-steps>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
 export default {
 	
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