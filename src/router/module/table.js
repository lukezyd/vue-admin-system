const main = require("@/pages/main");
const tableIndex = require("@/pages/ztable/index");
const primaryTable = require("@/pages/ztable/components/simple");
const secTable = require("@/pages/ztable/components/complex");
const seniorTable = require("@/pages/ztable/components/complex-est");

const table = {
	path:"/",
	component:main,
	children: [
		{
			path:'/ztable/index',
			name:'ztable',
			component:tableIndex,
			children:[
				{
					path:'/ztable/primary',
					name:'primary',
					component:primaryTable,
				},
				{
					path:'/ztable/second',
					name:'second',
					component:secTable,
				},
				{
					path:'/ztable/senior',
					name:'senior',
					component:seniorTable,
				}
			]
		}
	]
};

export default table