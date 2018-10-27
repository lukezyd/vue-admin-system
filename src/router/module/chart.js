const main = require("@/pages/main");
const formIndex = require("@/pages/chart/index");
const complexChart = require("@/pages/chart/components/complex");


const chartRouter = {
	path:'/',
	component:main,
	children: [
		{
			path:'/zchart/index',
			name:'zchart',
			component:formIndex,
			children:[
				{
					path:'/zchart/complex',
					name:'complex',
					component:complexChart,
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

export default chartRouter;