
const userMap = {
  admin: {
    roles: ['admin'],
    token: 'isAdmin',
    introduction: '管理员账号',
    account: 'Super Admin'
  }
}

export default {
  loginFn: config => {
    const account = JSON.parse(config.body).account;

    if(userMap[account]){
      userMap[account].code = '200';
    }else{
      userMap[account] = {};
      userMap[account].code = "404";
      userMap[account].msg = "用户名或密码错误";
    }
    return userMap[account];
  },

  logoutFn: config => {
    return {code:200}
  }
}
