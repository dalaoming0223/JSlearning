var obj = {
  name:'小鹿',
  age:'22',
  adress:'小鹿动画学编程'
}

function print(){
  console.log(this);       // 打印 this 的指向
  console.log(arguments);  // 打印传递的参数
}

// 通过 call 改变 this 指向
print.call(obj,1,2,3);   

// 通过 apply 改变 this 指向
print.apply(obj,[1,2,3]);

//es5
var array = [1, 2, 1333, 4, 5]
var max = Math.max.apply(null,array)
console.log(max)

// es6 求数组中最大的
var array = [1, 2,1333, 4, 5]
var max = Math.max(...array)
console.log(max)

//数组concat方法
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr3 = arr1.concat(arr2)
console.log(arr3)
