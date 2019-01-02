// var fs = require('fs')
// var data = '我output.txt34567, 8pipe9'
// var readerStream = fs.createReadStream('input.txt')
// var writerStream = fs.createWriteStream('output.txt')

// writerStream.write(data, 'UTF8')
// 标记文件末尾
// writerStream.end()

// writerStream.on('finish', function() {
//    console.log('写入完成')
// })

// writerStream.on('error', function(err) {
//    console.log(err.stack)
// })

// readerStream.pipe(writerStream)

// console.log('123')

var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))
  
console.log('文件压缩完成')