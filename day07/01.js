var express=require("express")
var app=express()
var db=require("./db")
app.get("/add",(req,res)=>{
    db.add("student",{"username":"tom","age":12},(err)=>{
        if(err) throw err
        res.send({"data":"数据插入成功"})
    })
})
app.get("/del",(req,res)=>{
    db.del("student",{"username":"tom"},(err)=>{
        if(err) throw err
        res.send({"data":"数据删除成功"})
    })
})
app.get("/data",(req,res)=>{
    db.data("student",{"username":"tom"},{$set:{"username":"jack"}},(err)=>{
        if(err) throw err
        res.send({"data":"数据修改成功"})
    })
})
app.get("/find",(req,res)=>{
    db.find("student",{},(err,data)=>{
        if(err) throw err
        res.send({"data":data})
    })
})
app.listen(3000)