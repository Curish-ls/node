var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    var obj = url.parse(req.url, true).query
    // 可以处理get请求
    res.end("接收到的username是:" + obj.username)
}).listen(3000)