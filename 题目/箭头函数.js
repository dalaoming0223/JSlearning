var findRepeatNumber = function(nums) {
  const map = {};
  for (const num of nums) {
      if (!map[num]) {
          map[num] = true;
      } else {
          return num;
      }
  }
};
arr = [1,0,1,3,4,5,6,6]
console.log(findRepeatNumber(arr))
