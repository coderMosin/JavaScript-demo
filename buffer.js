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

// ��Ҫ��¼��һ����ȫ������0��255��readUInt8����ȡ�������Χ, 
// ����ȫ������-128��127��readInt8����ȡ�������Χ��ô��û������
// ����Ļ���ǿ�Ҳ��Ƽ�ʹ��Buffer.from������һ������
// ��Ϊ��ͬ�����ֶ�ȡʱӦ�õ��ò�ͬ�ķ���

const buf1 = Buffer.from('this is')
const buf4 = Buffer.from(' funny')
console.log(Buffer.concat([buf1, buf4], buf1.length))
// <Buffer 74 68 69 73 20 69 73 20 66 75 6e 6e 79>