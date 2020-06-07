//创建数组的方式
var arr1 = [1,2,3,45,6,7,33]
console.log(arr1)

var arr2 = new Array(1,3,4,5)
console.log(arr2)

// var arr22 = new Array([1,3,4,5])
// console.log(arr22)

var arr3 = Array(1,2,3,4,5)
console.log(arr3)

var arr4 = Array.of(10,11,12,13,14)
console.log(arr4)

console.clear()

//访问数组

var arr = [1,2,3]
console.log("数组长度："+arr.length)
console.log(arr[0])
console.log(arr[1])

console.clear()

//添加元素

var arr = [1,2,3]
arr[0] = 666
console.log(arr)

arr[3] = 000
console.log(arr)

arr[8] = 999
console.log(arr)

console.clear()

//删除元素
//1.改length
var arr = [1,2,3,4,5,6,7,8]
arr.length = 4
console.log(arr)
arr.length = 0
console.log(arr)

//2.splice() splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
/**
 * arrayObject.splice(index,howmany,item1,.....,itemX)
index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemX	可选。向数组添加的新项目。
 * 
 */
var arr = [1,2,3,4,5,6,7,8,9]
arr.splice(3,4)
console.log(arr)
arr.splice(1,0,999,999)
console.log(arr)

console.clear()

//数组遍历
console.log('-----------(for)------------')
var arr = [1,2,3,4,5,6,7,8,9,1000]
for (let i = 0;i< arr.length; i++){
  console.log(arr[i])
}
console.log('-----------(for of)------------')
for(let ele of arr){
  console.log(ele)
}
console.log('-----------(forEach)------------')
arr.forEach((currentValue,index,arrgg)=>{
  console.log(currentValue,index,arrgg)
})

console.clear()

//栈模式（后进先出）
var stack = [1,2,3,4,5,6]
//入栈 push
stack.push(999)
console.log(stack)

//出栈 pop
var chuzhan = stack.pop()
console.log(chuzhan)
console.log(stack)
//查看栈顶元素
console.log(stack[stack.length - 1])


//队列模式 (先进先出)
console.clear()
const queue = [1,2,3]
//入队 push
queue.push(999,8888)
console.log(queue)

//出队 shift
var first = queue.shift()
console.log(first)
console.log(queue)

//插队 unshift
queue.unshift(333,444,555)
console.log(queue)

console.clear()


//反转数组 reverse
var arr = [1,2,3]
console.log(arr.reverse())
console.log(arr)//改变了原数组
  //split 	把字符串分割为字符串数组。 join 把数组的所有元素放入一个字符串。 是相反的
console.log('----反转hello world-----')
console.log("hello world".split(''))
console.log('hello world'.split('').reverse())
console.log("hello world".split('').reverse().join(''))

console.clear()


//数组排序
var arr = [1, 5, 3, 6, 40]
arr.sort()
console.log(arr)//此时40 在5 前面
arr.sort((a,b)=>{
  return a - b
})//升序
console.log(arr)
arr.sort((a,b)=>{
  return b - a
})//降序
console.log(arr)

console.clear()


//数组连接
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = arr1.concat(arr2)
console.log(arr3)

//数组裁切
console.clear()

var arr = [1,2,3,4,6]
var newArr = arr.slice(1,-1)
console.log(newArr)