/* 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let node1 = l1
    let node2 = l2
    let current = res

    while(node1 || node2){
        let sum = 0
        if(node1 && node1.val !== void 0) sum += node1.val;
        if(node2 && node2.val !== void 0) sum += node2.val;

        sum += current.val;

        let carry = Math.floor(sum/10);

        sum = sum % 10;

        current.val = sum

        node1 = node1 && node1.next ? node1.next : null
        node2 = node2 && node2.next ? node2.next : null

        if(node1 || node2)  {
            current.next = new ListNode(carry)
            current = current.next
        }else if(carry > 0){
            current.next = new ListNode(carry)
        }

    }

    return res
    
};