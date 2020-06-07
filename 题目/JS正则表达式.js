var str = 'where when what'

var re = /wh/
var re3 = /wh/g
var re2 = new RegExp('wh')

console.log(re.exec(str))
console.log(re.test(str))

console.log(re3.exec(str))
console.log(re3.exec(str))
console.log(re3.exec(str))

console.log(re3.toString(str))

//字符匹配
var str = `This Thas str contains 123 
capitalIzed letters and _-%^* symbols`
console.log(/T/.test(str))
console.log(/This/.test(str))
console.log(/Tssss/.test(str))
console.log(/123/.test(str))


//特殊字符匹配
console.log(str.match(/Th.s/g))
console.log(str.match(/1.3/g))

console.log(str.match(/\d/g))
console.log(str.match(/\w/g))
console.log(str.match(/\s/g))

console.log('-------------------')

//区间、逻辑和界定符


//分组
var str = `this that this and this`
console.log(/(th).*(th)/.exec(str))

var str2 = `aaaaab sasa ddd casa`
console.log(str2.match(/(aa){2}/g))

//日常开发常用正则表达式
  //  电话 1开头 第二位 3-9 剩余9位随意 11位
  var mobileRe = /^1[3-9]\d{9}$/g
  console.log(mobileRe.test('13450899837'))