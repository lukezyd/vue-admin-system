<template>
	<div class="alert" if-show="showAlert">
		<div class="alert-box" :class="alertType">
			<slot name="alertMain">
				<span class="msg"><i class="alert-icon fa" :class="iconName"></i>{{msgMain}}</span>
			</slot>			
		</div>
	</div>
</template>

<script>
	export default {
		name :"valert",
		props:{
			showAlert:{
				type:Boolean,
				require:false,
				default:false
			},
			alertType:{
				type:String,
				require:false
			},
			msgMain:{
				type:String,
				require:true
			}
		},
		data () {
			return {
				iconName:''
			}
		},
		created:function(){
			this.createIconName();
		},
		methods:{
			createIconName: function(){
				switch(this.alertType){
					case 'warn'		: this.iconName = 'fa-warning'; 		break;
					case 'success'  : this.iconName = 'fa-circle-o-notch' ; break;
					case 'error' 	: this.iconName = ' fa-times-circle' ; 	break;
				}
			}
		}
	}
</script>

<style>
	.alert{
		position: absolute;
		left: 0;
		right: 0;
		top:15%;
		margin:0 auto;
		z-index: 9999;
	}
	.alert-box{
		display: inline-block;
		padding: 15px;
		color:#333;
		border-radius: 2px;
		max-width: 430px;
	}
	.alert-box .msg{
		display: inline-block;
		width: 100%;
		line-height: 22px;
		text-align: center;
		font-size: 16px;
	}
	.alert-box.error{
		background: #e89191;
		color:#fff;
	}
	.alert-box.warn{
		background: #f1ce7e;
		color:#fff;
	}
	.alert-box.success{
		background: #90cc8d;
		color:#fff;
	}
	.alert-box .alert-icon{
		margin-right: 5px;
	}
</style>
