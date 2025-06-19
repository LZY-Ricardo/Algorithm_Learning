// 面试题 02.07. 链表相交
var getIntersectionNode = function(headA, headB) { 
    let cur1 = headA 
    let cur2 = headB
    let len1 = getListLength(headA)
    let len2 = getListLength(headB)

    while (len1 > len2) {
        if(!cur1) break
        cur1 = cur1.next
        len1--
    }

    while (len1 < len2) {
        if(!cur2) break
        cur2 = cur2.next
        len2--
    }

    while(cur1 && cur2) {
        if (cur1 === cur2) return cur1
        cur1 = cur1.next
        cur2 = cur2.next
    }

    return null

};
var getListLength = function(head) {
    let len = 0
    while (head) {
        len++
        head = head.next
    }
    return len
}