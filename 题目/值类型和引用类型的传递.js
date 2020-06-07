// 用堆栈存储去理解

function Person (name, age, salary) {
  this.name = name
  this.age = age
  this.salary = salary
}

function f1(person) { 
  // var person = p   堆内存中多出一个var person值的 内容指向p的栈内存
  person.name = 'ls'
  person = new Person('aa',18,1000) // 执行此步之后， var person的值指向新的栈内存
}

var p = new Person('zs', 18, 9999)
console.log(p.name)
f1(p)
console.log(p.name)

// p: {
//   name: 'zs',
//   age: 18,
//   salary: 9999
// }