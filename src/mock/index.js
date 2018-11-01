import Mock from 'mockjs'
import loginAPI from './module/login'
import homeApi from './module/home'
import tableApi from './module/table'

// 登录相关
Mock.mock('/isLogin', 'post', loginAPI.loginFn);
Mock.mock('/logout', 'post', loginAPI.logoutFn);

// 首页
Mock.mock('/firstData','post',homeApi.firstData);
Mock.mock('/chartData','post',homeApi.chartData);
Mock.mock('/sumData','post',homeApi.sumData);

// 表
Mock.mock('/tableData','post',tableApi.tableData);
Mock.mock('/tableDetails','post',tableApi.tableDetails);

export default Mock
