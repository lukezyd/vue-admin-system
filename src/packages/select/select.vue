<template>
	<div class="v-select">
		<div class="select-box">
			<input type="text" class="choose selectName" v-model="selectText" readonly="readonly" @click="onClick">
			<span class="select-icon"></span>
			<span class="clear-data"></span>
			<input type="text" class="hide selectId" v-model="selectId" readonly="readonly" >
			<transition name="slide">
				<div class="list-box" v-if="showList">
					<ul>
						<li v-for="item in lists" :key="item.id" @click="onSelect(item.id,item.text)">{{ item.text }}</li>
					</ul>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name :"vselect",
		props:{
			lists:{
				type:Array
			}
		},
		data() {
			return {
				showList:false,
				selectId:'',
				selectText:''
			}
		},
		methods:{
			onClick: function(){
				return this.showList = !this.showList;
			},
			onSelect: function(id,text){
				this.selectId = id;
				this.selectText = text;
				this.showList = !this.showList;
				this.$emit("selected",id);
			}
		}
	}
</script>

<style>
	.hide{display: none;}
	.v-select{
		position: relative;
	    width: 100px;
	    height: 35px;
	}
	.choose{
		width: 100%;
	    height: 35px;
	    border: 1px solid #ddd;
	    border-radius: 3px;
	    padding: 5px 7px;
	    cursor: pointer;
	}
	.list-box{
		position: absolute;
		width: 100%;
		border: 1px solid #ddd;
		top:35px;
	}

	.list-box li{
		list-style: none;
		line-height: 30px;
	    font-size: 14px;
	    padding: 0 6px;
	    cursor: pointer;
	}
	.list-box li:hover{
		background: #6b6b6b;
		color:#fff;
	}
</style>