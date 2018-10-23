<template>
	<div>
		<div class="zHome-recommend__info clearfix">
			<span class="info-logo fl">
					<img :src="personal.logo" alt="">
			</span>
			<div class="info-main clearfix">
				<p class="info-main__name">{{personal.name}}</p>
				<p>{{personal.desc}}</p>
			</div>
		</div>
		<ul>
			<li class="clearfix"  v-for="item in property">
				<span class="fl"><i class="fa" :class="item.icon"></i></span>
				<span>{{item.desc}}</span>
				<span class="fr">{{item.num}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data (){
			return {
				personal:{
					logo:"/static/images/p_logo.jpg",
					name:"Cat dan",
					desc:"一只两个月大的猫。"
				},
				property:[
					{icon:"fa-cubes",desc:"吃猫粮",num:12},
					{icon:"fa-heartbeat",desc:"配玩耍",num:22},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
					{icon:"fa-hourglass-3",desc:"睡觉",num:15},
				]
			}
		}
	}
</script>
