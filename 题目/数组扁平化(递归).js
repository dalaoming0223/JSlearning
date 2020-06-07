 let arr = [1, [2, [3, 4]]];
 
function flatten(arr){
  var result=[];
  for(var i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
          result=result.concat(flatten(arr[i]));//注意
      }else{
          result.push(arr[i]);
      }
  }
  return result;
}
console.log(flatten(arr));
