function addthreenum(a,b,c){
  return a + b + c
}

console.log(addthreenum(1,2,3))


function addthreenumCurry(a){
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}
console.log(addthreenumCurry(1)(2)(3))

var fixedTwo = addthreenumCurry(1)(2)
console.log(fixedTwo(3))
console.log(fixedTwo(4))
console.log(fixedTwo(5))