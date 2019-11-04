var fs =require("fs")
var http=require("http")
http.createServer((req,res)=>{
    // 读文件   异步读取
    // fs.readFile("./file/1.txt",(err,data)=>{
    //     res.end(data)
    // })
    // 读文件   同步读取
    // var a=fs.readFileSync("./file/1.txt")
    // res.end(a)
    // 写文件    writeFile
    // fs.writeFile("./file/1.txt","weesdsdsa","utf-8",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //     res.end("写入成功")
    // })
    // 追加内容  {flag:a} append
    // fs.appendFile("./file/1.txt","dsdsdsdsds",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("ssss")
    // })
    // 创建目录 
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    // // 创建文件
    // fs.writeFile("./file/2.txt","newcontent",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
// 删除文件
// fs.unlink("./file/2.txt",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("ssss")
// })
// 删除目录
// fs.rmdir("./aa",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("dsdsd")
// })
// 判断文件状态
// fs.stat("./file",(err,status)=>{
//     // 判断是否是文件夹
//     // console.log(status.isDirectory())
//     // 判断是否是文件
//     // console.log(status.isFile())
// })
// res.end("sss")
// 该名称
// fs.rename("./file/1.txt","./file/2.txt",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("ass")
// })
// 复制文件

// 打开文件

// 关闭文件
}).listen(3000)