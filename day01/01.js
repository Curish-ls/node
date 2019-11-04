//初识服务器
// node  模块
// 加载http模块
var http=require("http")
// 创建服务器
 var server=http.createServer(function(request,response){
    // 结束响应    =》响应客户端
    response.end("hello node")
})
// 监听端口
server.listen(3000,function(){
    console.log("服务器已经挂起")
})