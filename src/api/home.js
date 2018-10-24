import $axios from '@/utils/request'

// export function catData(){
// 	return $axios({
// 		url:'/catList',
// 		method:'post'
// 	});
// }

export function firstData(){
	return $axios({
		url:'/firstData',
		method:'post'
	});
} 

export function chartData(){
	return $axios({
		url:'/chartData',
		method:'post'
	});
} 
