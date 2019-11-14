// get 
var koa = require("koa")
var app = new koa()
app.use(async (ctx) => {
    // console.log(ctx)
    // ctx.body="koa"
    var adminuser = {
        username: "tom",
        pass: 123456
    }
    if (adminuser.username == ctx.query.username && adminuser.pass == ctx.query.password) {
        ctx.body = {
            "success": "ok",
            "msg": "登陆成功",
            "code": 0
        }
    } else {
        ctx.body = "失败"
    }
})
app.listen(3000)