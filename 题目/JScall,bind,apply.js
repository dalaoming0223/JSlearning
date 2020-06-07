var emp = {
  id: 1,
  name: '大佬铭'
}
// emp.printInfo()
// emp.department.printInfo()
function printInfo(dep1,dep2,dep3){
  console.log('员工姓名:'+ this.name, dep1, dep2, dep3)
}
// printInfo()
printInfo.call(emp, '技术部', '前端','楼上是煞笔')

printInfo.apply(emp,['技术部', '前端','楼上是煞笔'])

var newFunction = printInfo.bind(emp,'技术部', '前端','楼上是煞笔')
newFunction()