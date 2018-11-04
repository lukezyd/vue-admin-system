import Vue from 'vue'
import Router from 'vue-router'

import table from './module/table'
import formRouter from './module/form'
import chartRouter from './module/chart'

const routes = [
	{path:'/',component:resolve => require(['@/pages/login'],resolve)},
	{
		path:'/home',
		component: resolve => require(['@/pages/main'],resolve),
		children:[
			{path:'/',component:resolve => require(['@/pages/home/index'],resolve)},
			{path:'/notFind',component:resolve => require(['@/pages/404'],resolve)},
		]
	},
	table,
	formRouter,
	chartRouter
];

Vue.use(Router);

export default new Router({
	routes:routes
});