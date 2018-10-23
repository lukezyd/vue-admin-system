import Mock from 'mockjs'
import loginAPI from './module/login'
import homeApi from './module/home'


console.log(loginAPI.logoutFn)
// 登录相关
Mock.mock('/isLogin', 'post', loginAPI.loginFn);
Mock.mock('/logout', 'post', loginAPI.logoutFn);
Mock.mock('/catList','post',homeApi.catList);


export default Mock
