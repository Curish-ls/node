// koa-router
var koa=require("koa")
var app=new koa()
var router=require("koa-router")()
console.log(router)
router.get("/",async (ctx)=>{
    ctx.body="koa"
}).get("/login",async(ctx)=>{
    ctx.body="aaa"
})
// 支持所有路由方法
app.use(router.routes())
// 允许路由请求方式
    .use(router.allowedMethods())
app.listen(3000)