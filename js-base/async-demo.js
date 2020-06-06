// 异步 （callback 回调函数）
console.log(100)
setTimeout(() => {
    console.log('1000豪秒')
}, 1000)
console.log(300)
setTimeout(() => {
  console.log('0豪秒')
}, 0)
console.log(400)

// 同步
// console.log(100)
// alert(200)
// console.log(300)
