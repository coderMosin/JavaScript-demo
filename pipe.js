// var fs = require('fs')
// var data = '��output.txt34567, 8pipe9'
// var readerStream = fs.createReadStream('input.txt')
// var writerStream = fs.createWriteStream('output.txt')

// writerStream.write(data, 'UTF8')
// ����ļ�ĩβ
// writerStream.end()

// writerStream.on('finish', function() {
//    console.log('д�����')
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
  
console.log('�ļ�ѹ�����')