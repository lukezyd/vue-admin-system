import $axios from '@/utils/request'

export function tableData(){
	return $axios({
		url:'/tableData',
		method:'post'
	})
}