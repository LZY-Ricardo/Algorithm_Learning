// 104. 二叉树的最大深度

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
 * @return {number}
 */
var maxDepth = function(root) { // 层次遍历
    let queue = []
    let depth = 0
    if (root) queue.push(root)  
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let cur = queue.shift()
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        depth++
    }   
    return depth
};


/**
 * 计算二叉树的最大深度（DFS后序遍历实现）
 * 最大深度定义：从根节点到最远叶子节点的最长路径上的节点数量
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} 二叉树的最大深度，空树返回0
 */
var maxDepth = function(root) { 
    // 递归终止条件：如果当前节点为空，深度为0
    if (!root) return 0;
    
    // 递归计算左子树的最大深度
    let leftDepth = maxDepth(root.left);
    // 递归计算右子树的最大深度
    let rightDepth = maxDepth(root.right);
    
    // 当前节点的深度 = 左右子树最大深度中的较大值 + 1（当前节点本身）
    return Math.max(leftDepth, rightDepth) + 1;
};
