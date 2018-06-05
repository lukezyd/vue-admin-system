<template>
	<div class="v-select">
		<div class="select-box">
			<input type="text" class="choose selectName" :style="selectStyle.vipt" v-model="selectText" readonly="readonly" @click="onClick" placeholder="请选择">
			<span class="select-icon" :style="selectStyle.vicon"> <i class="fa" :class="{'fa-caret-down':isDown,'fa-caret-up':isUp}"></i></span>
			<span class="clear-data" v-show="showClear" @click="onClear">x</span>
			<input type="text" class="hide selectId" v-model="selectId" readonly="readonly" >
			<transition name="slide">
				<div class="list-box" v-if="showList" :style="selectStyle.vlist">
					<div class="wrapper" :class="{expendWidth:expendWidth}">
						<ul>
							<li v-for="item in lists" :key="item.id" @click="onSelect(item.id,item.text)">{{ item.text }}</li>
						</ul>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	/* selectStyle : 自定义样式
 	 * selectStyle.vipt : 自定义输入框的样式
	 * selectStyle.vicon : 自定义icon的样式
	 * selectStyle.vlist : 自定义下拉框的样式
	 */
	export default {
		name :"vselect",
		props:{
			lists:{
				type:Array
			},
			selectStyle:{
				type:Object
			}
		},
		data() {
			return {
				showList:false,
				selectId:'',
				selectText:'',
				isDown:true,
				isUp:false,
				expendWidth:false,
				showClear:false
			}
		},
		created:function(){
			if(this.lists.length > 6){
				this.expendWidth = true;
			}
		},
		
		methods:{
			onClick: function(){
				this.isUp = !this.isUp;
				this.isDown = !this.isDown;
				this.showList = !this.showList;
			},
			onSelect: function(id,text){
				this.selectId = id;
				this.selectText = text;
				this.showList = !this.showList;
				this.showClear = true;
				this.$emit("selected",id);
			},
			onClear: function(){
				this.selectText = '';
				this.selectId  = '';
				this.showClear = false;
			}
		}
	}
</script>

<style>
	.hide{display: none;}
	.v-select{
		position: relative;
	   	display: inline-block;
	}
	.choose{
		width: 100px;
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
		overflow: hidden;		
	}
	.list-box .wrapper{
		max-height: 200px;
		overflow-y: auto;
	}
	.expendWidth{
		margin-right: -18px;
	}
	.list-box li{
		list-style: none;
		line-height: 30px;
	    font-size: 14px;
		padding: 0 9px;
	    cursor: pointer;
	}
	.list-box li:hover{
		background: #bbb7b7;
		color:#fff;
	}
	.select-box{
		position: relative;
	}
	.select-icon{
		position: absolute;
		right: 0;
		top: 50%;
	    margin-top: -10px;
	    margin-right: 7px;
		color:#6f6c6c;
	}
	.clear-data{
		position: absolute;
		top:50%;
		right: 20px;
		margin-top: -12px;
		font-weight: normal;
		padding:2px;
		color:#999;
		cursor: pointer;
	}
	
	.slide-enter-active, .slide-leave-active {
	  transition: opacity .4s;
	}
	.slide-enter, .slide-leave-to  {
	  opacity: 0;
	}

/*	@keyframes showBox{
		0%{opacity: 0;}
		100%{opacity: 1;}
	} */
</style>
