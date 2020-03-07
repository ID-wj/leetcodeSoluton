## 题目
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路
采用维护两个队列的方式解答，队列wholeQueue保存全部元素，pop_front()直接返回wholeQueue的最先进队元素；队列queue则在每次有元素进队时将比该元素小的元素删除，保持递减，max_value()则取queue第一个元素。

### 代码

```javascript
var MaxQueue = function() {
  this.wholeQueue = []
  this.queue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.queue.length) {
    return this.queue[0]
  }
  return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.wholeQueue.push(value)
  while (this.queue.length && this.queue[this.queue.length - 1] < value) {
    this.queue.pop()
  }
  this.queue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.wholeQueue.length) {
    return -1
  }
  const temp = this.wholeQueue.shift()
  if (temp === this.queue[0]) this.queue.shift()
  return temp
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```