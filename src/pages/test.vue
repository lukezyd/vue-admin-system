<template>
	<div class="test">
		<zselect class="select-demo"
				:lists="lists" 
				:selectStyle="selectStyle" 
				:showSearch="showSearch" 
				:defaultText="defaultText" 
				:defaultId="defaultId">
		</zselect>	

		<z-alert v-show="showa" :alertType="alertType" :msgMain="msgMain" :title="title" :autoClose="autoClose">
			<!-- <div slot="alertMain"><i class="fa fa-warning"></i>it is a error tips</div> -->
		</z-alert>

		<!-- <v-input class="input-test" :defaultVlaue="defaultVlaue" :placeholder="placeholder"></v-input> -->
		<zcheckbox  :ischecked="checked">
			wqqtq
		</zcheckbox>

		<input type="button" @click="change" value="change">
	</div>
</template>

<script>
	export default{
		name:"test",
		data (){
			return {
				listData:[
					{id:1,text:"aaaaaa"},
					{id:2,text:"bbbbbb"},
					{id:3,text:"cccccc"},
					{id:4,text:"dddddd"}
				],
				defaultText:"default text",
				defaultId:"default id",
				lists:[
					{id:1,text:"aaaaaa"},
					{id:2,text:"bbb325bbb"},
					{id:3,text:"cccc235cc"},
					{id:4,text:"dd124dddfgjd"},
					{id:5,text:"eeefgj769eee"},
					{id:6,text:"ffdfaf23fsghdfff"},
					{id:7,text:"gg124gggg"},
					{id:8,text:"hhh34325h56hhh"},
					{id:9,text:"ddddd47d"},
					{id:10,text:"iiiii325ii"},
					{id:11,text:"jjjjj325jj"},
					{id:12,text:"kkkkk35kkkk"},
					{id:13,text:"llllllll"}
				],
				showSearch:true,
				selectStyle:{
					// vicon:{
					// 	color:"red"
					// }
				},
				title:"错误:",
				checkboxText:"测试checkbox",
				autoClose:true,
				showa:false,
				alertType:"error",
				msgMain:"this is a test alert,this is a test alert,this is a test alert",
				defaultVlaue:'defaultVlaue',
				placeholder:"请输入",
				checked:false
			}
		},
		methods:{
			change: function(){
				this.showa = ! this.showa;
			}
		}
	}
</script>

<style type="text/css">
	.input-test{
		margin-top: 100px;
	}

	.select-demo{
		width: 200px;
	}
</style>