// 创建对象
// 1.字面量
var employee = {
  name: 'chicken',
  age: 20,
  position: 'nice',
  sign: function(){
    console.log('chicken 打卡')
  }
}
// 2.new Object()
var employee2 = new Object();
employee2.name = 'snake'
employee2.signIn = function(){
  console.log('snake 打卡')
}

// 3.构造函数
function Employee(name , position) {
  this.name = name
  this.position = position
}
var emp1 = new Employee('dalaoming','前端工程师')
console.log(emp1)
// 4.


// 对象属性
console.log(employee.name)
console.log(employee2.name)
console.log(employee2['name'])


employee.name = 'julaoming'
console.log(employee.name)

employee2.age = 22
console.log(employee2)



//省略key值
var name = 'dalaoming'
var employee4 = {
  name,
  signIn(){
    console.log('dalaoming da ka ')
  }
}
console.log(employee4.name)
console.log(employee4.signIn())

// 遍历属性
console.log(Object.keys(employee))

//删除属性
delete employee.name
console.log(Object.keys(employee))

console.clear()

// 对象 getters / setters

var person = {
  first: '三',
  last: '张',
  get fullName(){
    return this.first + this.last

  },
  set fullName(fullName){
    let [last,first] = fullName.split(',')
    this.last = last
    this.first = first
  }
}

console.log(person.fullName)
person.fullName = '四,李'
console.log(person.fullName)

function Employee2(name, position){
  this.name = name
  this.position = position
}
var emp5 = new Employee2('招六','前端工程师')
Object.defineProperty(emp5,'info', {
  get: function(){
    return this.name +'--'+ this.position

  },
  set: function(luanda){
    let [name, position] = luanda.split(' ')
    this.name = name
    this.position = position
  }
})
console.log(emp5.info)
emp5.info = '赵琦 傻傻的后台'
console.log(emp5)