var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
http.createServer((req, res) => {
    

    /***
     * <%%>流程控制标签
     * <%=%>输出
     * <%#%>去除注释
     * <% _%>去除前面的空格
     * <% _%>去除后面的空格
     * <%-%>语句解析
     *
     *
     */

     fs.readFile("./view/index.ejs",(err,data)=>{
         var template=data.toString()
         var list = ["vue", "react", "node"]
       //              渲染   第一个参数代表的模板   第二个参数代表的是数据
        var result = ejs.render(template, {list:list}) 
        // response  响应前端请求
          res.end(result)
     })
    
   
}).listen(3000)