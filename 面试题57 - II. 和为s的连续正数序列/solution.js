/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let arr = []
  let l = 1
  let r = 2
  while(l < r) {
    const sum = (l + r) * (r - l + 1) * 0.5
    if (sum === target) {
      let temp = []
      for (let i = 0; i < r - l + 1; i++) {
        temp[i] = l + i
      }
      arr.push(temp)
      l++
    }
    else if(sum > target){
      l += 1
    }
    else {
      r += 1
    }
  }
  return arr
};

console.log(findContinuousSequence(9))