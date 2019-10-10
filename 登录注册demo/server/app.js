const express = require('express');
const app = express();

//设置允许跨域请求； 
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
})

//请求响应helloworld
app.get('/',(req, res) => res.send('Hello World!'));

//注册请求
const signUp = require('./models/sign_up');
app.use('/sign_up', signUp);


//登录请求
const login = require('./models/get_msg'); 
app.use('/login', login);

app.listen(3000, () => console.log('http://192.168.124.7:3000/sign_up'))
