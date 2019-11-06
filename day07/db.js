// 封装数据库方法
var mongoClient=require("mongodb").MongoClient
const {url}=require("./seting/url")
function ConnectDB(callback){
    // db  指代数据库
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err
        // 创建或使用数据库
        var dbName=db.db("user")
        callback(db,dbName)
    })
}
// 增   集合    回调函数
exports.add=function(collection,json,callback){
    // 如何和connectDB进行连接
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).insert(json,(err)=>{
            callback(err)
            // 关闭数据库
            db.close()
        })
    })
}
// 删
exports.del=function(collection,json,callback){
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).deleteOne(json,(err)=>{
            callback(err)
            db.close()
        })
    })
}
// 改
exports.data=function(collection,oldjson,newjson,callback){
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).update(oldjson,newjson,(err)=>{
            callback(err)
            db.close()
        })
    })
}
// 查
exports.find=function(collection,json,callback){
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).find(json).toArray((err,data)=>{
            callback(err,data)
            db.close()
        })
    })
}