import $axios from '@/utils/request'

export function chartData(){
	return $axios({
		url:'/catList',
		method:'post'
	});
}

export function firstData(){
	return $axios({
		url:'/firstData',
		method:'psot'
	});
} 
