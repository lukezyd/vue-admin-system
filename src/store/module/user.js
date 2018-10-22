import { getToken, setToken, removeToken } from '@/utils/token'

const user = {
	state:{
		account:'',
		token:getToken(),
	},

	mutations:{
		setAccount:(state, account) => {
			state.account = account;
		},
		setToken:(state,token) => {
			state.token = token;
     		setToken(token);
		},
		logout: (state) => {
			state.token = '';
     		removeToken();
		}
	},
	actions:{
		
	}
}

export default user