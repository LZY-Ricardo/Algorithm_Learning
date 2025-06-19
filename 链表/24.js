//  24. 两两交换链表中的节点
var swapPairs = function(head) { // 定义两个临时变量 一个储存正在交换组的第一个节点 一个储存下一个交换组的第三个节点
    const dummy = new ListNode(0, head)
    let cur = dummy
    while (cur.next && cur.next.next) {
        let temp1 = cur.next // 保存原第一个节点
        let temp2 = cur.next.next.next // 保存原第三个节点
        cur.next = cur.next.next // 将第二个节点变成第一个节点
        cur.next.next = temp1 // 让原本的第二个节点(现在的第一个节点)指向原来的第一个节点
        temp1.next = temp2 // 让原本的第一个节点(现在的第二个节点)指向原本的第三个节点
        cur = cur.next.next // 将指针移动到下一组要交换的节点的前节点
    }  
    return dummy.next
};

var swapPairs = function(head) { // 定义一个临时变量 储存正在交换的交换组的第二个节点
    const dummy = new ListNode(0, head)
    let cur = dummy
    while (cur.next && cur.next.next) {
        let temp = cur.next.next
        cur.next.next = temp.next
        temp.next = cur.next
        cur.next = temp
        cur = cur.next.next
    }  
    return dummy.next
};