## 题目
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

## 解题思路

采用迭代的方式，使用两个变量，一个变量保存下一位待保存的ListNode

### 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = null
  let curr = head
  while (curr !== null) {
    let nextTemp = curr.next
    curr.next = pre
    pre = curr
    curr = nextTemp
  }
  return pre
};
```