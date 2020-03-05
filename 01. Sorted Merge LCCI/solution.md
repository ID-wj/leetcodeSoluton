## 题目

给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sorted-merge-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路
将A B中按大小依次放入A的末尾，排完B还有剩则直接放入A中相应位置

### 代码

```javascript
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  while(m > 0 && n > 0) {
    A[m + n - 1] = A[m - 1] > B[n - 1] ? A[m-- - 1] : B[n-- - 1]
  }
  while(n > 0) {
    A[n - 1] = B[n-- - 1]
  }
  return A
};
```