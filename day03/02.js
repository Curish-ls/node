// createWriteStream createReadStream
// 事件  data  end
var fs=require("fs")
var readStream=fs.createReadStream("./file/1.txt")
var length=0
// 探究数据流转过程
readStream.on("data",(chunks)=>{
    length++
    console.log(chunks.toString())
})
readStream.on("end",()=>{
    console.log(length)
})