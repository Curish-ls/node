// views
var express=require("express")
var app=express()
// var ejs=require(ejs)
// 在express里面设置模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    var list=["tom","jack"]
    res.render("index.ejs",{list:list})
    // res.send("1212")
}).listen(3000)