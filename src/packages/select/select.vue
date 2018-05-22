<template>
	<div class="v-select">
		<div class="select-box">
			<input type="text" class="choose selectName" readonly="readonly" @click="onClick">
			<input type="text" class="hide selectId" readonly="readonly" >
			<transition name="slide">
				<div class="list-box" v-if="showList">
					<ul>
						<li v-for="item in lists" :key="item.id">{{ item.text }}</li>
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
				showList:false
			}
		},
		methods:{
			onClick: function(){
				return this.showList = !this.showList;
			}
		}
	}
</script>

<style>
	.hide{display: none;}
	.v-select{
		position: relative;
	    width: 200px;
	}
	.choose{
		width: 100%;
	    height: 100%;
	    border: 1px solid #ddd;
	    border-radius: 3px;
	    padding: 5px 7px;
	    cursor: pointer;
	}
	.list-box{
		position: absolute;
		width: 100%;
		border: 1px solid #ddd;
		top:26px;
	}

	.list-box li{
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