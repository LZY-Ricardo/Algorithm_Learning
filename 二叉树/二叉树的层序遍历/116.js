// 116. 填充每个节点的下一个右侧节点指针
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
/**
 * 填充每个节点的next指针，使其指向同层右侧节点
 * @param {Node} root - 完美二叉树的根节点
 * @return {Node} - 修改后的根节点
 */
var connect = function(root) {
    let queue = [] // 辅助队列用于层序遍历
    if (root) queue.push(root) // 根节点入队
    
    while (queue.length) { // 当队列不为空时循环
        let len = queue.length // 当前层节点数
        let pre = null // 前驱节点指针
        
        while (len--) { // 处理当前层所有节点
            let cur = queue.shift() // 取出队首节点
            
            // 如果pre不为null，则将pre的next指向当前节点
            if (pre) pre.next = cur
            // 更新pre为当前节点
            pre = cur
            
            // 将左右子节点加入队列（完美二叉树，左右子节点要么都存在，要么都不存在）
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
    }  
    return root // 返回修改后的根节点
};