var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    if(req.ulr=="/favicon.ico"){
        return
    }
    var obj=url.parse(req.url,true).query
    console.log(obj.username)
    res.end()
}).listen(3000)