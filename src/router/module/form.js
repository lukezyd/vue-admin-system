const formRouter = {
	path:'/',
	component:resolve => require(['@/pages/main'],resolve),
	children: [
		{
			path:'/zform/index',
			name:'zform',
			component:resolve => require(['@/pages/form/index'],resolve),
			children:[
				{
					path:'/zform/primary',
					name:'primary',
					component:resolve => require(['@/pages/form/components/simple'],resolve)
				},
				{
					path:'/zform/second',
					name:'second',
					component:resolve => require(['@/pages/form/components/complex'],resolve)
				},
				{
					path:'/zform/third',
					name:'second',
					component:resolve => require(['@/pages/form/components/third'],resolve)
				},
				{
					path:'/zform/complete',
					name:'complete',
					component:resolve => require(['@/pages/form/components/complete'],resolve)
				}
			]
		}
	]
};

export default formRouter;