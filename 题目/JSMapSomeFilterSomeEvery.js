//数组map
var arr = [1,2,3,4]
var mapArr = arr.map(ele => ele * 2)
console.log(mapArr)

console.clear()

//数组 reduce
var arr = [1,2,3,4]
var result = arr.reduce((previous, current) => previous + current,0)
console.log(result)

var result2 = arr.reduce((first, second) => first + second)
console.log(result2)

console.clear()

//数组过滤 filter
var arr = [1,2,3,4,5,6]
var filterArr = arr.filter(item => item > 4)
console.log(filterArr)

console.clear()

//数组测试 
//every：检测数值元素的每个元素是否都符合条件。
var arr = [1,2,3,4,5,6]
var result = arr.every(item => item > 0)
console.log(result)

//some：检测数组元素中是否有元素符合指定条件。
var result2 = arr.some(item => item > 5)
console.log(result2)