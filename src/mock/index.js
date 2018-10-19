import Mock from 'mockjs'
import loginAPI from './login'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock('/islogin', 'post', loginAPI.loginFn)
// Mock.mock(/\/login/, (req,res) => {
// 	alert("is login");
// });

export default Mock
