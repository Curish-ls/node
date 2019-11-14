// 模板引擎   koa-view
var koa=require("koa")
var app=new koa()
var views=require("koa-views")
var path=require("path")
app.use(views(path.join(__dirname,"./view"),{
    // extension   扩展
    extension:"ejs"
}))
app.use(async(ctx)=>{
   await  ctx.render("index",{title:"ererere"})
})
app.listen(3000)