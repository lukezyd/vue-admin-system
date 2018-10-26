const main = require("@/pages/main");
const formIndex = require("@/pages/form/index");
const primaryForm = require("@/pages/form/components/simple");


const formRouter = {
	path:'/',
	component:main,
	children: [
		{
			path:'/zform/index',
			name:'zform',
			component:formIndex,
			children:[
				{
					path:'/zform/primary',
					name:'primary',
					component:primaryForm,
				},
				// {
				// 	path:'/ztable/second',
				// 	name:'second',
				// 	component:secTable,
				// },
				// {
				// 	path:'/ztable/senior',
				// 	name:'senior',
				// 	component:seniorTable,
				// }
			]
		}
	]
};

export default formRouter;