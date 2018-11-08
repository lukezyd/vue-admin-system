<template>
	<div>
		<ul>
			<li  v-for="(item,i) in sumList">
				<span class="fa fl" :style="{background:colorList[i]}" :class="item.icon" ></span>
				<div class="zHome-datasum__box">
					<count-to :start-val="0" :end-val="item.num" :duration="3000" class="sun-num"/>
					<span class="sun-desc">{{item.desc}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import countTo from 'vue-count-to'
	import { sumData } from '@/api/home'
	export default {
		components:{countTo},
		data() {
			return {
				colorList:["#e49393","#88dcef","#84daab","#ddb3de"],
				sumList:[]
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			loadData: function(){
				sumData().then((response) => {
					this.sumList = response;
				});
			}
		}
	};
</script>
