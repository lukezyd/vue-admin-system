<template>
	<header class="admin-header clearfix">
		<span class="nav-setting fl">
			<i class="fa fa-bars fa-2x"></i>
		</span>
		<h2 class="v-title fl"><i class="red">V</i>ADMIN</h2>
		<div class="person-box  fr">
			<span class="person-icon"><i class="fa fa-align-right fa-2x"></i></span>
		</div>
	</header>
</template>
<script>
	export default{
		name:"adminHeader",
		data(){
			return {

			}
		}
	}
</script>

<style>
.admin-header{
	height: 60px;
	width: 100%;
	background: #fff;
	position: relative;
}
.nav-setting{
	padding: 14px;
	cursor: pointer;
}
.admin-header h2{
	line-height: 60px;
}
.red{color:red;font-style: normal;}
.person-box{
	height: 100%;
}
.person-icon{
	display: inline-block;
	padding: 14px;
	cursor: pointer;
}
</style>