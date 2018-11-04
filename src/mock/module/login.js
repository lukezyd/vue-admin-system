
const userMap = {
  admin: {
    roles: ['admin'],
    token: 'isAdmin',
    introduction: '管理员账号',
    account: 'Admin'
  }
}

export default {
  loginFn: config => {
    const account = JSON.parse(config.body).account;
    let userData = {};

    if(userMap[account]){
      userData = userMap[account];
      userData.code = '200';
    }else{
      userData.code = "404";
      userData.msg = "用户名或密码错误";
    }
    return userData;
  },

  logoutFn: config => {
    return {code:200}
  }
}
