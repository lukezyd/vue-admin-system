import $axios from '@/utils/request'

export function sumData(){
	return $axios({
		url:'/sumData',
		method:'post'
	});
}

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
