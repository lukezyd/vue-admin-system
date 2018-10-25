import Mock from 'mockjs'
import loginAPI from './module/login'
import homeApi from './module/home'

// 登录相关
Mock.mock('/isLogin', 'post', loginAPI.loginFn);
Mock.mock('/logout', 'post', loginAPI.logoutFn);

// 首页
Mock.mock('/firstData','post',homeApi.firstData);
Mock.mock('/chartData','post',homeApi.chartData);
Mock.mock('/sumData','post',homeApi.sumData);


export default Mock
