function Employee(name, position){
  this.name = name
  this.position = position
  this.signIn = function(){
    console.log('打卡！' + name)
  }
}
var emp1 = new Employee('Lisa','前端')
var emp2 = new Employee('Judy','前端')
console.log(emp1.__proto__)
console.log(Employee.prototype)
console.log(emp2)

Employee.prototype.age = 20
console.log(emp1.age)
console.log(Employee.prototype)

Employee.prototype.printInfo = function () {
  console.log(this.name, this.age, this.position)
  }
console.log(Employee.prototype)
emp1.printInfo()

console.log(emp1.__proto__ === Employee.prototype)
console.log(Object.getPrototypeOf(emp2))

//Object.create()
console.log('-----------------------')
var manager = Object.create(emp1)
console.log(manager)

//原型链
console.log('------------原型链-------------')

//修改原型指向
console.log('---------------修改原型指向-----------------')

//对象解构赋值
console.log('---------------对象解构-----------------')
var post2 = {
  id:2 ,
  title: '标题二',
  content: '这是内容',
  comments: [
    {
      userId: 1,
      comment: "评论1",
    },
    {
      userId: 2,
      comment: "评论2",
    },
    {
      userId: 3,
      comment: "评论3",
    },
  ]
}

var {comments: [,{comment}]} = post2
console.log(comment) 

function getId(idKey, obj){
  let { [ idKey ] :id} = obj
  return id
}
console.log(getId('userId',{
    userId: 1,
    comment: "评论1",
}))


var {comments, ...rest} = post2
console.log(rest)