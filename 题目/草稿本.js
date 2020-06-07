// let queue = []
// queue.unshift(1)
// queue.unshift(2)
// queue.unshift(3)
// console.log(queue)
// queue.pop()
// console.log(queue)
// queue.unshift(4)
// queue.unshift(5)
// console
// //队列操作

var climbStairs = function(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2
  for(let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(climbStairs(3))