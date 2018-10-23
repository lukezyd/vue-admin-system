const catChart = {
	cname:[],
	num:[]
};

const firstData = {

};

export default {
	catList: config => {
		return {
			code: 200,
			name: catChart.cname,
			num: catChart.num
		}
	},
	firstData: config => {
		firstData.code = 200;
		return firstData;
	}
}