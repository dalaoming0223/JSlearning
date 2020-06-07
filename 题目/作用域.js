// var num1 = 55
// var num2 = 66

// function f(num, num1) {
//   num = 100
//   num1 = 100
//   num2 = 100
//   console.log(num)
//   console.log(num1)
//   console.log(num2)
// }

// f(num1, num2)
// console.log(num1)
// console.log(num2)
// console.log(typeof num)


// (function() {
//   var a = b = 5;
// })();   
// console.log(b);
// console.log(a);

// function s() {
//   console.log(typeof NaN)
// }
// s()



// //原型继承的基本案例
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// //1.直接替换原型对象 
// var parent = {
// 	sayHello : function() {
// 		console.log("方式1：替换原型对象");
// 	}
// }
// Person.prototype = parent;
// var p = new Person("张三", 50);
// p.sayHello()


// //2.混入式原型继承
// function Student(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// var parent2 = {
// 	sayHello : function() {
// 		console.log("方式2：原型继承之混入式加载成员");
// 	}
// }
// for ( var k in parent2) {
// 	Student.prototype[k] = parent2[k];
// }
// var p = new Student("张三", 50);
// p.sayHello();
// console.log(p._proto_)

// var arr = []
// console.log(arr.__proto__)

// function F() {
//   // this.name = name
// }

// F.prototype.name = 'kevin'

// var f = new F()
// console.log(F.prototype)
// console.log(f.__proto__)

var a = [1,2,3,34]
console.log(a instanceof Array)