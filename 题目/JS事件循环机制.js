setTimeout(function(){
  console.log('定时器开始啦')
});

new Promise(function(resolve){
  console.log('马上执行for循环啦');
  for(var i = 0; i < 10000; i++){
      i == 99 && resolve();
  }
}).then(function(){
  console.log('执行then函数啦')
});

console.log('代码执行结束');


setTimeout(function() {
  console.log('setTimeout');
})

new Promise(function(resolve) {
  console.log('promise');
  resolve()
}).then(function() {
  console.log('then');
})

console.log('console');

//console.clear()
var arr = [12,34,56]
console.log(Object.prototype.isPrototypeOf(arr))
console.log(Array.prototype.isPrototypeOf(arr))