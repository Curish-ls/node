// 路由层级
var koa=require("koa")
var app=new koa()
var Router=require("koa-router")
var router=new Router({
    // 默认匹配
    prefix:"/user"
})
router.get("/",async (ctx)=>{
    ctx.body="new koa"
}).get("/login",async(ctx)=>{
    ctx.body="aaa"
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
