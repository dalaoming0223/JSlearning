var arr1 = [1, 35, 5, 16, 23,89, 122, 100 ,99]
// arr1.sort(function(a,b){
//   return a - b
// })

arr1.sort( (a, b) => a-b) // 增序排序
arr1.sort( (a, b) => b-a) // 降序排序
console.log(arr1)




