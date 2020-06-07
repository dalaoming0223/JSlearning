const obj1 = {
  age: 20,
  name: '大佬铭',
  address: {
    city: "ShanTou"
  },
  arr: ['a','b','c']
}

/**
 * @param {Object} obj
 */

function deepClone(obj = {}){
  //判断这个对象是不是为空
  if (typeof obj !== "object" || obj == null){
    return obj
  }

  let result
  if (obj instanceof Array){
    result = []
  }else{
    result = {}
  }

  for(key in obj){
    if(obj.hasOwnProperty(key)){
          result[key] = deepClone(obj[key])
    }
  }

  return result
}

const obj2 = deepClone(obj1)
obj2.arr[0] = '66666666666'
console.log(obj1)
console.log(obj2)