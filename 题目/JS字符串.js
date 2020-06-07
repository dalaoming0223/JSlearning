//
var str = '我是招巨佬'
console.log(str)

var str2 = new String('nihao')
console.log(str2)

//转义字符
var str3 = "他说：\n'我们出去玩吧'" 
var str4 = "他说：\t'我们出去玩吧'" 
console.log(str3)
console.log(str4)
console.log('\u1010')

//遍历
console.log('-----------------------------------')
for(let i = 0; i < str.length; i++){
  console.log(str.charAt(i))
}

for(let item of str){
  console.log(item)
}

// for(let item in str){
//   console.log(item)
// }

//裁切
var str = "this is dalaoming long ....."
console.log(str.slice(0,4))
console.log(str.slice(4))
console.log(str.slice(0,-1))
console.log(str.slice(-6,-1))

console.log(str.substring(0,4))
console.log(str.substring(4))
console.log(str.substring(0,-1))//不能接受负数
console.log(str.substring(-6,-1))

// 拼接 + 性能优于 concat
var str4 = 'hello'
var str5 = 'world'
console.log(str4 + str5)
console.log(str4.concat(str5))
console.log(str5.concat(str4))

//大小写
console.log('--------------大小写-------------')
console.log(str5.toUpperCase())
console.log('WORLD IS'.toLowerCase())

//去掉空格 trim去除字符串两边的空白
var str =  '    hello   world   '
console.log(str.trim())

//模板字符串
var longStr = `
fsdfasdfa dafasdfasdf  sdfasdfasdfa 
      asdfasdfasdfas dfa sdfadsf
fasdfasdfasdf fdfasdfadsf     adsfsdfas fadfasd fsdafdf `
console.log(longStr)

var name = '风华'
var str = `nihao${name}`
console.log(str)