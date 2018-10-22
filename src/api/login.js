import $axios from '@/utils/request'

export function login(data){
	return $axios({
		url:'/isLogin',
		method:'post',
		data
	});
}

export function logOut(){
	return $axios({
		url:'/isLogout',
		method:'psot'
	})
}

