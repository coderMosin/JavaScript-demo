const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
const json = JSON.stringify(buf)

// console.log(json)

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
	    Buffer.from(value.data) :
		value
})

// console.log(copy)

const buf2 = Buffer.from([127, -1])
// console.log(buf2)

const buf3 = Buffer.from([127, 13])
// console.log(buf3)

// console.log(buf3.equals(buf2))

// 当要记录的一组数全部落在0到255（readUInt8来读取）这个范围, 
// 或者全部落在-128到127（readInt8来读取）这个范围那么就没有问题
// 否则的话就强烈不推荐使用Buffer.from来保存一组数。
// 因为不同的数字读取时应该调用不同的方法

const buf1 = Buffer.from('this is')
const buf4 = Buffer.from(' funny')
console.log(Buffer.concat([buf1, buf4], buf1.length))
// <Buffer 74 68 69 73 20 69 73 20 66 75 6e 6e 79>