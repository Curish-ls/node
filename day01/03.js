// fs  file system   文件系统
var http=require("http")
var fs =require("fs")
 http.createServer((req,res)=>{
    //  读文件
    fs.readFile("./file/1.txt",function(err,data){
        console.log(data.toString())
    })
    res.end("jjj")
 }).listen(3000,function(){
     console.log("sdsdsd")
 })