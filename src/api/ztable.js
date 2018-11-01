import $axios from '@/utils/request'

export function tableData(){
	return $axios({
		url:'/tableData',
		method:'post'
	})
}

export function tableDetails(){
	return $axios({
		url:'/tableDetails',
		methods:'post'
	});
}