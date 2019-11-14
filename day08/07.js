// cookie
// 获取上下文的cookie
// cookies.set()设置   cookie.get()获取
var koa=require("koa")
var app=new koa()
var router=require("koa-router")()
router.get("/index",async(ctx)=>{
    ctx.cookies.set(
        "name","liushuai",
        {
            maxAge:90000,
            httpOnly:true,
        }
    )
    ctx.body="cookie"
})
router.get("/get",async(ctx)=>{
    var val=ctx.cookies.get("name")
    ctx.body=val
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)