## 1、找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

```javaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let arr = new Set()
  for(let i = 0; i < nums.length; i++) {
    if(arr.has(nums[i])) {
      return nums[i]
    } else {
      arr.add(nums[i])
    }
  }
  return false
};
```