import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'


const userLogin = require("../pages/login");
const homePage = require("../pages/home");

const routes = [
	{path:"/",component:userLogin},
	{path:"/home",component:homePage}
];


Vue.use(Router);

export default new Router({
  routes:routes
})