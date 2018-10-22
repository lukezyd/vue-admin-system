import Mock from 'mockjs'
import loginAPI from './login'

// Mock.setup({
//   timeout: '350-600'
// })
console.log(loginAPI.logoutFn)
// 登录相关
Mock.mock('/isLogin', 'post', loginAPI.loginFn)
Mock.mock('/logout', 'post', loginAPI.logoutFn)
// Mock.mock(/\/login/, (req,res) => {
// 	alert("is login");
// });

export default Mock
