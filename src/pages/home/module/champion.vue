<template>
	<div>
		<div class="zHome-recommend__info clearfix">
			<span class="info-logo fl">
					<img :src="synopsis.logo" alt="">
			</span>
			<div class="info-main clearfix">
				<p class="info-main__name"><i class="fa fa-trophy"></i>{{synopsis.name}}</p>
				<p>{{synopsis.desc}}</p>
			</div>
		</div>
		<ul>
			<li class="recommend-item clearfix"  v-for="item in property">
				<span class="fl"><i class="fa" :class="item.icon"></i></span>
				<span>{{item.desc}}</span>
				<span class="num fr">{{item.num}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import { firstData } from '@/api/home'
	export default {
		data (){
			return {
				synopsis:{},
				property:[]
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			loadData: function(){
				firstData().then((response) => {
					this.synopsis = response.synopsis;
					this.property = response.property;
				});
			}
		}
	}
</script>
<style scoped>
.info-logo{
	border-radius: 50%;
    overflow: hidden;
}
.fa-trophy{
	margin-right: 5px;
	color:#f3c94e;
}
.num{
	color: #ffffff;
    background: #88dcef;
    border-radius: 50px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin-top: 10px;
}
.recommend-item:nth-child(1) .num{
	background: #ff6c60;
}
</style>
