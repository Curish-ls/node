// 案例  图片上传
var http = require("http")
var form = require("formidable")
var patha = require("path")
var fs = require("fs")
var sd = require("silly-datetime")
http.createServer((req, res) => {
    if (req.url = "/dopost") {
        var fm = form.IncomingForm()
        fm.uploadDir = "./file"
        fm.parse(req, function (err, fields, files) {
            
            var low = files.pic.path
            // console.log(files.pic.path)
            var extname = patha.extname(files.pic.name)
            
            var time = sd.format(new Date(), "YYYYMMDDHHmmss")
            var about = "./file/" + time + extname
            // console.log(about)
            fs.rename(low, about, (err) => {
                if (err) {
                    throw err
                }
            })
            res.end("success")
        })

    }


}).listen(3000)