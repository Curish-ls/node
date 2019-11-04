// 解决乱码
var http=require("http")
// 创建服务器
 var server=http.createServer(function(request,response){
    // 结束响应    =》响应客户端
    // 设置请求响应头
    // Content-type  文本类型  text/html   text/plain   
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    response.end("中国")
})
// 监听端口
server.listen(3000,function(){
    console.log("服务器已经挂起")
})