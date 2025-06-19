//  142. 环形链表 II
var detectCycle = function(head) {
    let fast = head // fast指针
    let slow = head // slow指针
    while (fast && fast.next) { // fast指针和fast指针的下一个都存在
        fast = fast.next.next // fast指针每次移动两个节点
        slow = slow.next // slow指针每次移动一个节点
        if(fast === slow) { // fast指针和slow指针相遇
            let index1 = head // 定义一个指针指向链表头节点
            let index2 = fast // 定义一个指针指向相遇节点
            while (index1 !== index2) { // 两个指针相遇的节点就是环的入口
                index1 = index1.next // 两个指针每次移动一个节点
                index2 = index2.next 
            }
            return index1
        }
    }
    return null // 没有环返回null
};