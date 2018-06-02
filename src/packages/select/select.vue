<template>
	<div class="v-select">
		<div class="select-box">
			<input type="text" class="choose selectName" v-model="selectText" readonly="readonly" @click="onClick" placeholder="请选择">
			<span class="select-icon"> <i class="fa" :class="{'fa-caret-down':isDown,'fa-caret-up':isUp}"></i></span>
			<span class="clear-data"></span>
			<input type="text" class="hide selectId" v-model="selectId" readonly="readonly" >
			<transition name="slide">
				<div class="list-box" v-if="showList" >
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
				toggleAnimation:{
					'-webkit-animation':' showBox 2s ease',
					'-o-animation': 'showBox 2s ease',
					'animation': 'showBox 2s ease'
				}
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
				this.$emit("selected",id);
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
		-webkit-animation: showBox 1s ease;
		-o-animation: showBox 1s ease;
		animation: showBox 1s ease;
		
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
		top: 0;
		color:#6f6c6c;
		padding: 9px 10px;
	}

/*	.slide-enter-active, .slide-leave-active {
	  transition: opacity .4s;
	}
	.slide-enter, .slide-leave-to  {
	  opacity: 0;
	}
*/
	@keyframes showBox{
		0%{opacity: 0;}
		100%{opacity: 1;}
	} 
</style>
