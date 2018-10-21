import Vue from 'vue'
import Router from 'vue-router'

const main = require("../pages/main");

const userLogin = require("../pages/login");
const homePage = require("../pages/home/index");
const test = require("../pages/test");
const primaryTable = require("../pages/ztable/primaryTable");
const secTable = require("../pages/ztable/secTable");
const seniorTable = require("../pages/ztable/seniorTable");
// const map = require("../packages/charts/map/map.vue");

const routes = [
	{path:"/login",component:userLogin},
	{
		path:"/",
		component:main,
		children:[
			{path:'/',component:homePage},
			{path:"/primaryTable",component:primaryTable},
			{path:"/secTable",component:secTable},
			{path:"/seniorTable",component:seniorTable}
		]
	},
	{path:"/test",component:test},
	// {path:"/map",component:map}
];

Vue.use(Router);

export default new Router({
  routes:routes
});