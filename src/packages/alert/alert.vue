<template>
	<transition name="zAlert-down">
		<div class="zAlert" v-show="showAlert">
			<div class="zAlert-box" :class="msgType">
				<span class="zAlert-box__title">{{title}}</span>
				<span class="zAlert-box__close" @click="close" ><i class="fa fa-close"></i></span>		
				<slot name="alertMain">
					<span class="zAlert-box__msg"><i class="zAlert-box__icon fa" :class="iconName"></i>{{msgMain}}</span>
				</slot>	
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name :"zAlert",
		props:{
			title:{
				type:String
			},
			alertType:{
				type:String,
				require:false
			},
			msgMain:{
				type:String, 
				require:true
			},
			autoClose:{
				type:Boolean
			}
		},
		data () {
			return {
				showAlert:true,
			}
		},
		computed:{
			iconName: function(){
				var _name = '';
				switch(this.alertType){
					case 'warn'		: _name = 'fa-warning'; 		break;
					case 'success'  : _name = 'fa-circle-o-notch' ; break;
					case 'error' 	: _name = 'fa-times-circle' ; 	break;
				}
				return _name;
			},
			msgType: function(){
				return `zAlert-box__msg--${this.alertType}`
			}
		},
		methods:{
			close: function(){
				this.showAlert = false;
				this.$emit("close");
			}
		}
	}
</script>
