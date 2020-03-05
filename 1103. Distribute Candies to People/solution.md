## 题目

排排坐，分糖果。

我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/distribute-candies-to-people
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路
官方解题思路
以等差数列方式求解

### 代码

```javascript
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  // 等差数列元素数量  糖果发放次数
  let p = Math.floor(Math.sqrt(2 * candies + 0.25) - 0.5)
  // 最后一份糖果数
  ramaining = candies - p * (p + 1) * 0.5
  // 发放轮数
  rows = Math.floor(p / num_people)
  // 不完整的一轮发放人数
  cols = p % num_people
  let d = new Array(num_people).fill(0)
  for (let i = 0; i < num_people; i++) {
    d[i] = (i + 1) * rows + num_people * (rows * (rows - 1) * 0.5)
    if (i < cols) {
      d[i] += i + 1 + num_people * rows
    }
  }
  d[cols] += ramaining
  return d
};
```