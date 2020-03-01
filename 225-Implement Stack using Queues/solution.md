## 题目

使用队列实现栈的下列操作：

* push(x) -- 元素 x 入栈
* pop() -- 移除栈顶元素
* top() -- 获取栈顶元素
* empty() -- 返回栈是否为空

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-stack-using-queues
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路

### 初始化

新建一个数组来模拟
***

### push

把数据放在数组末尾模拟入栈
***

### pop

删除数组最后的元素
***

### top

返回数组最后一位元素
***

### empty

判断数组长度是否为0
***

### 代码

```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.stack = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if (x) {

    this.stack[this.stack.length] = x
    return this.stack.length
  } else {
    return this.stack.length
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let ele = undefined
  if(!this.empty()) {
    ele = this.stack[this.stack.length - 1]
    this.stack.length = this.stack.length - 1
  }
  return ele
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length ? false : true
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```