// koa 框架
var koa=require("koa")
var app=new koa()
app.use(async (content)=>{
    // async  异步读取
    // context 执行上下文
    content.body="koa"
})
app.listen(3000) 