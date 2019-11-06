var express=require("express")
var app=express()
var mongoClient=require("mongodb").MongoClient
app.get("/add",(req,res)=>{
var url="mongodb://127.0.0.1:27017"
mongoClient.connect(url,(err,db)=>{
    if(err) throw err
    // 创建数据库
    var dbName=db.db("ls")
    // 链接集合
    // 增
    // dbName.collection("wzj").insert({"username":"mocio","age":12,"sex":"man"},(err)=>{
    //     if(err) throw err
    //     res.send({"data":"插入成功"})
    // })
    // 删
    // dbName.collection("wzj").deleteOne({"username":"tom"},(err)=>{
    //     if(err) throw err
    //     res.send({"data":"删除成功"})
    // })
    // 改
    // dbName.collection("wzj").update({"username":"aa"},{$set:{"username":"gai"}},(err)=>{
    //     if(err) throw err
    //     res.send({"data":"修改成功"})
    // })
    // 查
    dbName.collection("wzj").find().toArray((err,data)=>{
        if(err) throw err
        res.send({"data":data})
        db.close()
    })
})
})




app.listen(3000)