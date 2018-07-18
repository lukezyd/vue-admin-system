<template>
	<div class="zCheckbox">
		<div class="zCheckbox-box">
		    <label class="zCheckbox-box__label">
				<input class="hide" type="checkbox" name="" v-model="checked">
		    	<span class="zCheckbox-box__icon"><i class="fa check-icon" :class="checkIcon"></i></span>
		    	<slot name="checkboxMain">
					<span class="zCheckbox-box__text">
						<slot></slot>
					</span>
		    	</slot>
		    </label>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name : "zcheckbox",
		props:{
			ischecked:{
				type:Boolean
			},
			checkboxText:{
				type:String
			}
		},
		data (){
			return {
				checkIcons:'',
				_isChecked:false
			}
		},
		created: function(){
			this.ischecked ? this.checked = true : this.checked = false;
		},
		computed: {
			checkIcon: function(){
				return this.checked ? "fa-check-square" : "fa-square-o"
			}
		}
	}
</script>
