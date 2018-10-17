import Vue from 'vue'
import Router from 'vue-router'

import echarts from 'echarts'

const main = require("../pages/main");

const userLogin = require("../pages/login");
const homePage = require("../pages/home");
const test = require("../pages/test");
const map = require("../packages/charts/map/map.vue");

const routes = [
	{path:"/",component:userLogin},
	{
		path:"/index",
		component:main,
		children:[
			{path:'/',component:homePage}
		]
	},
	{path:"/test",component:test},
	{path:"/map",component:map},
];

Vue.prototype.echarts = echarts
Vue.use(Router);

export default new Router({
  routes:routes
});