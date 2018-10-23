const main = require("@/pages/main");
const primaryTable = require("@/pages/ztable/primaryTable");
const secTable = require("@/pages/ztable/secTable");
const seniorTable = require("@/pages/ztable/seniorTable");

const table = {
	path:"/",
	component:main,
	children: [
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
};

export default table