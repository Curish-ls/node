var http =require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    // 普通获取数据的方式
    fs.readFile("./file/1.txt",(err,data)=>{
        console.log(data)
        res.end(data)
    })
    // 通过流的方式获取数据
    // pipe  创建文件读取流
    var fsStream=fs.createReadStream("./file/1.txt") //source  资源
    fsStream.pipe(res)
        
}).listen(3000)