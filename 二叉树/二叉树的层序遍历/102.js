// 102. 二叉树的层序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 二叉树的层序遍历
var levelOrder = function(root) {
    let res = []  // 存储最终结果的二维数组
    let queue = [] // 使用队列辅助BFS遍历
    
    // 如果根节点存在，将其加入队列
    if (root) queue.push(root)
    
    // 当队列不为空时循环
    while (queue.length) {
        let len = queue.length  // 记录当前层的节点数量
        let temp = []  // 临时存储当前层的节点值
        
        // 遍历当前层的所有节点
        while (len--) {
            let cur = queue.shift()  // 取出队列头部节点
            temp.push(cur.val)  // 将节点值存入临时数组
            
            // 将当前节点的左右子节点加入队列（如果存在）
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        
        // 将当前层的节点值数组加入结果
        res.push(temp)
    }
    
    return res  // 返回层序遍历结果
};