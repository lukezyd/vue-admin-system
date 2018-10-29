const chartRouter = {
	path:'/',
	component:resolve => require(['@/pages/main'],resolve),
	children: [
		{
			path:'/zchart/index',
			name:'zchart',
			component:resolve => require(['@/pages/chart/index'],resolve),
			children:[
				{
					path:'/zchart/complex',
					name:'complex',
					component:resolve => require(['@/pages/chart/components/complex'],resolve),
				}
			]
		}
	]
};

export default chartRouter;