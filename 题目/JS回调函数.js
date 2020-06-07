function request(cb){
  console.log('请求数据')
  cb('success')
  console.log("请求结束")
}

function cb(text){
  console.log('执行回调')
  console.log('text:'+text)
}

request(cb)

console.log('------------------------')
function request(cb){
  console.log('请求数据')
  cb('success')
  console.log("请求结束")
}

// function cb(text){
//   console.log('执行回调')
//   console.log('text'+text)
// }

request((text) =>{
    console.log('执行回调')
  console.log('text:'+text)
})