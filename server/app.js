var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var session=require("express-session")

var studentRouter = require('./routes/student');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');

var app = express()

//这样可以通过/public/xx 的方式访问public目录中的所有资源了
//将public目录中的资源开放出来
//没有第一个参数的时候可以通过省略/public的方式来访问
app.use('/public/', express.static(path.join(__dirname, './public/')))

//解决跨域问题
//其中Origin不可以是通配符*
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//配置art-template模板引擎
// app.engine('html',require('express-art-template'))

//配置body-parser中间件解析post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置session，一定要在路由之前
app.use(session({
	secret:'itcast',//随便起，“秘密”，会在原有加密基础之上加上这个字符串拼接加密，安全性更高，防止恶意伪造
	resave:false,
  saveUninitialized:true,//无论是否使用session，默认直接分配一把钥匙
  cookie : {
    maxAge : 1000 * 60 * 30 // 设置 session 的有效时间，单位毫秒
  }
}))


//router(app)
//把路由容器挂载到app服务中
app.use(studentRouter)
app.use(registerRouter)
app.use(loginRouter)



app.listen(3005, function () {
  console.log('app is run')
})