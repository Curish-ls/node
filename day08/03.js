// post
var koa=require("koa")
var app=new koa()
var koaParser=require("koa-bodyparser")
app.use(koaParser())
app.use(async (ctx)=>{
    // 结构赋值
    const {username,password}=ctx.request.body
    ctx.body={
        username:ctx.request.body.username,
        password:ctx.request.body.password
    }
    // ctx.body={
    //     username:ctx.request.body.username,
    //     password:ctx.request.body.password
    // }
})
app.listen(3000)