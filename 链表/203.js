// 203. 移除链表元素
// 简单
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 示例 1：
// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// 示例 2：
// 输入：head = [], val = 1
// 输出：[]
// 示例 3：
// 输入：head = [7,7,7,7], val = 7
// 输出：[]
// 提示：
// 列表中的节点数目在范围 [0, 104] 内
// 1 <= Node.val <= 50
// 0 <= val <= 50
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeElements = function(head, val) {
    let dummy = new ListNode(0, head)
    current = dummy
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next // 删除节点
            // 不移动current指针，继续检查新的current.next
        } else {
            current = current.next // 只有不删除时才移动指针
        }
    }
    return dummy.next
};

head = [1,2,6,3,4,5,6], val = 6
console.log(removeElements(head, val))