const table = {
	path:"/",
	component:resolve => require(['@/pages/main'],resolve),
	children: [
		{
			path:'/ztable/index',
			name:'ztable',
			component:resolve => require(['@/pages/ztable/index'],resolve),
			children:[
				{
					path:'/ztable/primary',
					name:'primary',
					component:resolve => require(['@/pages/ztable/components/simple'],resolve),
				},
				{
					path:'/ztable/second',
					name:'second',
					component:resolve => require(['@/pages/ztable/components/complex'],resolve),
				},
				{
					path:'/ztable/senior',
					name:'senior',
					component:resolve => require(['@/pages/ztable/components/complex-est'],resolve),
				}
			]
		}
	]
};

export default table