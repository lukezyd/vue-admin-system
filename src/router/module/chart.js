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
					path:'/zchart/mapChart',
					name:'mapChart',
					component:resolve => require(['@/pages/chart/components/mapChart'],resolve),
				},
				{
					path:'/zchart/catChart',
					name:'catChart',
					component:resolve => require(['@/pages/chart/components/catChart'],resolve),
				}
			]
		}
	]
};

export default chartRouter;