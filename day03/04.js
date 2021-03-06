/**
 * 流的类型？   四种
 * readable stream  可读流   Writable  stream  可写流
 * duplex 双工流 （可读可写） Transform 转化流
 * 数据的压缩
*/

var fs = require("fs")
// 压缩模块
var zlib = require("zlib")
var readStream = fs.createReadStream("./file/1.txt")
var writeStream = fs.createWriteStream("./file/1.txt.gz")
// 流支持链式操作  zlib.createGzip() 创建压缩包
readStream.pipe(zlib.createGzip()).pipe(writeStream)