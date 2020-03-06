## 题目
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路
用滑动窗口的思想

从l=1，r=2开始，区间和为sum：(l + r) * (r - l + 1) * 0.5
sum和target对比，相等则保存区间，sum小则增大r，sum大则增大l

### 代码

```javascript
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
```