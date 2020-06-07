// var add = (function () {
//   var counter = 0;
//   return function () {
//     console.log(counter)
//     return counter += 1;
//   }
// })();



// // function add() {
// //   var counter = 0 
// //   function f() {
// //     console.log(counter)
// //     return counter += 1
// //   }
// //   return f()
// // }

// add();
// add();
// add();
var change = []
var len = 8
for(var i = 0;i< len;i++){
  change[i] = function(){
    console.log(i)
  }
}