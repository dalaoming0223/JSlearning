class Employee {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var emp = new Employee('前端','大佬铭')
console.log(emp)

class Manager extends Employee{
  constructor(name , position, dept){
    super(name, position)
    this.dept = dept
  }

}

var manager = new Manager('后端', '巨佬民', '技术部')
console.log(manager)