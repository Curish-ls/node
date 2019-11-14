// 路由嵌套
var koa=require("koa")
var app=new koa()
var Router=require("koa-router")
var router=new Router()
var home=new Router()
home.get("/home" ,async(ctx)=>{
    ctx.body="home"
})
var page=new Router()
page.get("/page", async (ctx)=>{
    ctx.body="page"
})
router.get("/" ,async (ctx)=>{
    ctx.body="一级路由"
})
// 使用二级路由
app.use(home.routes(),home.allowedMethods())
app.use(page.routes(),page.allowedMethods())
// 使用一级路由
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)