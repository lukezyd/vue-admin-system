import Vue from 'vue'
import Router from 'vue-router'

const main = require("@/pages/main");
const userLogin = require("@/pages/login");
const homePage = require("@/pages/home/index");
const test = require("@/pages/test");

import table from './module/table'
import formRouter from './module/form'
import chartRouter from './module/chart'
// const map = require("../packages/charts/map/map.vue");

const routes = [
	{path:'/',component:userLogin},
	{
		path:'/home',
		component:main,
		children:[
			{path:'/',component:homePage},
		]
	},
	table,
	formRouter,
	chartRouter
	// {path:"/test",component:test},
	// {path:"/map",component:map}
];

Vue.use(Router);

export default new Router({
	routes:routes
});