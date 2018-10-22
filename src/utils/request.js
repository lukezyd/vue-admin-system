import axios from 'axios'
import { Message } from 'element-ui'


const ajax = new axios.create({
	// baseURL:'',
	timeout:5000
});

// 发送请求
ajax.interceptors.request.use( 
	config => {
		//请求之前做的事
		return config;
	},
	error => {
		//请求失败做的事
		Promise.reject(error);
	}
);

// 返回结果
ajax.interceptors.response.use(
	response => {
		const code = response.data.code;
		/* code: 自定义错误码. 
		 * 10001: token 过期或无效
		 *
		 *
		 */
		if(code == 10001){
			Message({
		      message: '身份验证失败，请重新登录',
		      type: 'error',
		      duration: 5 * 1000
		    }).then(() => {

		    });

		    Promise.reject(response);
		}else{
			return response.data;
		}
	}, 
	error => {
		Message({
	      message: error.message,
	      type: 'error',
	      duration: 5 * 1000
	    });

	  	return Promise.reject(error);
	}
);

export default ajax;