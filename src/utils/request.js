import axios from 'axios'

const service = new axios.create({
	baseURL:'',
	timeout:5000
});


service.interceptors.request.use(function(){
	//请求之前做的事
},function(error){
	//请求失败做的事
});

service.interceptors.request.use(function(response){
	const code = response.data.code;

	if(code != 5000){

	}
},function(error){

});

export default service;