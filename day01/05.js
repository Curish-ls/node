var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {

    if (req.url == "/favicon.ico") {
        return
    }
    if (req.url == "/") {
        fs.readFile("./file/tou.html", (err, data) => {
            res.end(data)
        })
    } else if (req.url == "/foo") {
        fs.readFile("./file/foo.html", (err, data) => {
            res.end(data)
        })
    } else {
        fs.readFile("./file/404.html", (err, data)=>{
            res.end(data)
        })

    }

}).listen(3000,function(){
    console.log("挂起")
})
