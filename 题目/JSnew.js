/**
 * 手写一个new操作符
 * Con：一个构造函数
 * args：传递构造函数的参数
 */

 function create(Con,...args){
  // 创建一个新对象 
  let obj = {}
  
  // 绑定原型
  obj.__proto__ = Con.prototype

  // 绑定this
  let result = Con.apply(obj, args)
  
  // return 这个新对象
  return result instanceof Object ? result : obj
 }

 function test(name,age){
   this.name = name
   this.age = age
 }

 test.prototype.sayName = function() {
  console.log(this.name)
 }

 gg = create(test,'Dalaoming',21)
 console.log(gg)