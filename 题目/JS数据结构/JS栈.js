// class stack{
//   constructor(){
//     this.stack = []
//   }
//   push(item){
//     this.stack.push(item)
//   }
//   pop(){
//     this.stack.pop()
//   }
//   peek() {
//     return this.stack[this.getCount() - 1]
//   }
//   getCount() {
//     return this.stack.length
//   }
//   isEmpty() {
//     return this.getCount() === 0
//   }
// }

/*
暴力正则法*/

// var isValid = function (s) {
//   while (s.length) {
//       var temp = s;
//       s = s.replace('()', '');
//       console.log('1',s)
//       s = s.replace('[]', '');
//       console.log('2',s)
//       s = s.replace('{}', '');
//       console.log('3',s)
//       if (s == temp) return false
//   }
//   return true;
// };


var isValid = function (s) {
  var map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  var leftArr = []
  for (var ch of s) {
    if (ch in map) {
      leftArr.push(ch)
      // return true
    }//为左括号时，顺序保存
    else { //为右括号时，与数组末位匹配
      if (ch != map[leftArr.pop()]) return false;
    }
  }
  return !leftArr.length //防止全部为左括号
};


console.log(isValid("({[()"))