/*
*1.定义一个路由文件  router.js
*2.在router中定义三个视图
*3.在03.js中通过路径访问路由视图
*/

var http = require("http")
var router = require("./file/router")
http.createServer((req, res) => {
    if(req.url=="/"){
        router.home(req,res)
    }else if(req.url=="/about"){
        router.about(req,res)
    }else if(req.url=="/news"){
        router.news(req,res)
    }else{
        res.end("404")
    }
    // switch (req.url) {
    //     case "/": router.home(req, res)
    //         break;
    //     case "/about": router.about(req, res)
    //         break;
    //     case "/news": router.news(req, res)
    //         break
    // }
}).listen(3000)
