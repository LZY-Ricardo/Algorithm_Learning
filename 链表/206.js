//206. 反转链表
var reverseList = function(head) {  // 双指针反转链表
    let pre = null // 前指针
    let cur = head // 当前指针
    let temp = null // 临时指针
    while (cur !== null) { // 遍历链表
        temp = cur.next // 先保存下一个节点
        cur.next = pre // 反转指针
        pre = cur // 前指针后移
        cur = temp // 当前指针后移
    }  
    return pre
};

var reverseList = function(head) {  // 递归反转链表
    if(head === null) return head;
    return reverse(head, null);
};
var reverse = function(cur, pre) {
    if (cur === null) return pre
    let temp = cur.next
    cur.next = pre
    return reverse(temp, cur);
}