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
	export default {
		components:{countTo},
		data() {
			return {
				colorList:["#e49393","#88dcef","#84daab","#ddb3de"],
				sumList:[
					{icon:"fa-users fa-2x",num:2340,desc:"新增用户"},
					{icon:"fa-tags fa-2x",num:2340,desc:"新增标签"},
					{icon:"fa-line-chart fa-2x",num:67500,desc:"累计时长"},
					{icon:"fa-bar-chart fa-2x",num:6890,desc:"总计"},
				]
			}
		}
	}
</script>
