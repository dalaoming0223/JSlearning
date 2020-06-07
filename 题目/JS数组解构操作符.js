//解构操作符
var arr = [1,2,3,4]
var [a,b,c] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(a)

function gg() {
  let ss = 'dalaoming'
  let cc = 'ddd'
  return [ss,cc]
  }
var [first, second] = gg()
console.log(first,second)  

//rest 操作符
var arr = [1,2,3,4,5,6,7,8]
var [a,b,...rest] = arr
console.log(a,b,rest)

var [a,,b,...rest] = arr
console.log(a,b,rest)


//map 结构
console.log('-------------map------------------')
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
console.log(map)
for (let [key, value] of map) {
  console.log(key + " is " + value);
}

// map 方法	返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
var arr = [1,2,3,4]
var mapArr = arr.map(ele => ele * 2)
console.log(mapArr)

// array.from
console.log('---------------Array.from----------------')
var setObj = new Set(["a", "b", "c"]);
var objArr = Array.from(setObj);
console.log(setObj)
console.log(objArr)

let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
console.log(set)