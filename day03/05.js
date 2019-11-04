// Buffer  二进制数据 缓冲区
/**
 * 什么是buffer？
 * 从类型说：就是一个类数组
 * 从内存来说：就是开辟的新的内存空间
 * 作用：
 * 1.处理二进制数据
 * 2.解决数据传输过大的问题
 * 案例：文件流  事件流  Tcp
 * 别名：缓冲区(等待区)
 * 什么是二进制数据？
 * 返回 0和1
 * 创建buffer？
 * new buffer()   废弃
 * 因为buffer是一个全局对象 不需要通过require加载
 * buffer可以传输的类型？
 * string, Buffer, ArrayBuffer, Array, or Array-like Object
 * buffer下面有哪些方法？
 * toJSon  toString slice contact  length
 * buffer 的编码类型？
 * utf8 base64 hex Ascii unicode
 * buffer 和cache的区别？
 * buffer：临时缓冲区
 * cache：永久的缓冲区
*/
// 第一种定义buffer的方式
// Buffer.from() 把字符串转buffer
// var buf=Buffer.from("node")
/* <buffer 6e 6f 64 65> */
// 返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf=Buffer.alloc(10)
// console.log(buf.length)
// 不安全 不推荐使用   返回一个未初始化的buffer
var buf=Buffer.allocUnsafe()
console.log(buf)