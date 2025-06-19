// 19. 删除链表的倒数第 N 个结点
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let fast = dummy // 快指针
    let slow = dummy // 慢指针
    n++ // 快指针先走n+1步
    while(n-- && fast !== null) {
        fast = fast.next
    }
    while(fast !== null) { // 当快指针走到头时 慢指针刚好走到倒数第 n+1 个节点
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next // 删除倒数第n个节点
    return dummy.next
};