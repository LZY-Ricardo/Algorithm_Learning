// 160. 相交链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const visited = new Set() // 用于存储链表A的节点
    let temp = headA 
    while (temp !== null) {
        visited.add(temp) // 标记链表A的节点
        temp = temp.next
    }
    temp = headB
    while (temp !== null) {
        if (visited.has(temp)){
            return temp // 找到相交节点
        }
        temp = temp.next
    }
    return null
};