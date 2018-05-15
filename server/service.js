
var router = function(app){
	var express = require("express");
	var http = require("http");
	var bodyParser = require("body-parser");
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extend:false}));


	app.post("/login",function(req,res){
		var account = req.body.account;
		var password = req.body.password;

		console.log(account,password);
		// if(account == "vadmin" && password == "v123456"){
		if(account == "v" && password == "v"){
			res.send({"code":0,"msg":"ok",data:{authority:["home","page01","page02"]});
		}else{
			res.send({"code":10001,"msg":"用户名密码错误"});
		}
	});
}



module.exports = router;
