// cookie-parser
var path = require("path")
var express = require("express")
// cookie中间件
var cookieParser =require("cookie-parser")
var app = express()
// var static = path.resolve(__dirname, "public")
// app.use(express.static(static))

// 让express和cookie建立起来联系
app.use(cookieParser())

app.get("/", (req, res) => {
    console.log("首页中获取:" + req.cookies)
    res.send({ "data": "login中的cookie为:" + req.cookies })
})
// 设置  setCookie
app.get("/login", (req, res) => {
    var obj = req.query.username
    // req.cookies.cookiename=obj
    // 设置cookie  maxAge:过期时间 ,httpOnly:只允许在服务器修改cookie
    // sigend  是否生成签名   domain  域名   secure
    res.cookie("username", obj, { maxAge: 9000, httpOnly: true })
    res.send({ "data": obj })
})
// 获取 getCookie
app.get("/list", (req, res) => {
    console.log(req.cookies.cookiename)
    res.send()
})
app.listen(3000)