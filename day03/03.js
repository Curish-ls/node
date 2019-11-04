// 监控日志  readline
var fs = require("fs")
var readline = require("readline")
var readStream = fs.createReadStream("./file/1.txt")
// console.log(readline)
// data end  line的监听日志
/**
 * data 监听输入数据
 * end  完成数据的读取
*/
var rl = readline.createInterface({
    // 监听输入数据
    input: readStream
})
// 日志执行时间
rl.on("line", (linenum) => {
    console.log(new Date+ linenum)
})
// 日志读取完成关闭
rl.on("close", () => {
    console.log("监听数据完毕")
})