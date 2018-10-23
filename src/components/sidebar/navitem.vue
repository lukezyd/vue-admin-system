<template>
	<div>
		<el-submenu v-if="item.children" :index="index">
			<template slot="title">
				<i class="fa fa-dashboard"></i>	
				<span>{{item.text}} </span>
			</template>
			<el-menu-item-group>
				<el-menu-item v-for="(child,index) in item.children" :key="index" index="String(_index)+'-'+(index+1)" @click="toPage(child.basePath)" >{{child.text}}| {{String(_index)+'-'+(index+1)}}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-menu-item v-else :index="index" @click="toPage(item.basePath)">
			<i class="fa fa-dashboard"></i>
			<span slot="title">{{item.text}}</span>
		</el-menu-item>
 	</div>
</template>
<script>
	export default{
		props:{
			item:{},
			index:{}
		},
		data(){
			return {
				authorityList: [],
				_index:''
			}
		},
		created(){
			this._index = this.index.toString();
		},
		methods:{
			toPage: function(path){
				this.$router.push(path);
			}
		}
	};
</script>

