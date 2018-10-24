const catChart = {
	cname: ["布偶猫","折耳猫","英短猫","波斯猫","短毛猫","蓝猫","挪威猫","缅因猫","埃及猫","美短猫","孟买猫","埃及猫","美短猫","孟买猫"],
	num:[5, 20, 36, 10, 10, 20,10, 20,12,34,45,12,34,45]
};

const firstData = {

};

export default {
	sumData: config => {
		return {
			code: 200,
		}
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