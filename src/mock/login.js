
const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '管理员账号',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
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
  }
}
