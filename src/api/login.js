import $axios from '@/utils/request'

export function loginFn(data){
	console.log(data)
	return $axios({
		url:'/isLogin',
		method:'post',
		data
	});
};

export function logoutFn(){
	return $axios({
		url:'/logout',
		method:'post'
	});
};