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


var maxDepth = function(root) { // DFS
    if (!root) return 0
    else {
        let leftDepth = maxDepth(root.left)
        let rightDepth = maxDepth(root.right)
        return Math.max(leftDepth, rightDepth) + 1
    }
};
