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
				}
			]
		}
	]
};

export default formRouter;