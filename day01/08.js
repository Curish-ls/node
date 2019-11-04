var   http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    // var result='http:/localhost:3000/?uaername=233&password=132'
    // var obj=url.parse(result)
    // console.log(obj)
    // var obj=url.format({
    //     protocol: 'http:',
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?uaername=233&password=132',
    //     query: 'uaername=233&password=132',
    //     pathname: '/localhost:3000/',
    //     path: '/localhost:3000/?uaername=233&password=132',
    //     href: 'http:/localhost:3000/?uaername=233&password=132'
    // })
    // console.log(obj)     
    var obj=url.resolve("http://localhost:3000","/new")
    console.log(obj)
    res.end()
}).listen(3000)