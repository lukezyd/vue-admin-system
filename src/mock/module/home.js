const catChart = {
	cname: ["折耳猫","英短猫","波斯猫","布偶猫","短毛猫","蓝猫","挪威猫","缅因猫","埃及猫","美短猫","孟买猫","暹罗猫","伯曼猫","狸花猫","褴褛猫"],
	num:[ 20, 36, 10,50, 10, 20,10, 20,12,44,45,7,34,45,18]
};

const firstData = {
	synopsis:{
		logo:'./static/images/p_logo.jpg',
		name:'布偶猫',
		desc:'温顺好静,对人友善,美丽优雅,又被称为"仙女猫"。'
	},
	property:[
		{icon:"fa-hand-grab-o",desc:"点击量",num:23422},
		{icon:"fa-heartbeat",desc:"喜欢",num:2212},
		{icon:"fa-cubes",desc:"收藏",num:1225},
		{icon:"fa-list-alt",desc:"评论",num:152},
		{icon:"fa-reply-all",desc:"转发",num:1511}
	]
};

const sumData = [
	{icon:"fa-users fa-2x",num:2340,desc:"新增用户"},
	{icon:"fa-tags fa-2x",num:2340,desc:"新增标签"},
	{icon:"fa-line-chart fa-2x",num:6890,desc:"访问量"},
	{icon:"fa-bar-chart fa-2x",num:67500,desc:"总计"}
];

export default {
	sumData: config => {
		sumData.code = 200;
		return sumData;
	},
	firstData: config => {
		firstData.code = 200;
		return firstData;
	},

	chartData: config => {
		return {
			catChart:catChart,
			code:200
		}
	}
}