// 111. 二叉树的最小深度、
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
var minDepth = function(root) {
    if (!root) return 0
    else if (!root.left && !root.right) return 1
    else {
        let leftDepth = minDepth(root.left)
        let rightDepth = minDepth(root.right)
        if (leftDepth === 0 || rightDepth === 0) return leftDepth + rightDepth + 1
        return Math.min(leftDepth, rightDepth) + 1
    }
};

var minDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    let ans = Infinity
    if (root.left) ans = Math.min(ans, minDepth(root.left))
    if (root.right) ans = Math.min(ans, minDepth(root.right))
    return ans + 1
};

var minDepth = function(root) {
    let queue = []
    if (root) queue.push(root)
    let depth = 0
    while (queue.length) {
        let len = queue.length    
        while (len--) {
            let cur = queue.shift()
            if (!cur.left && !cur.right) return depth + 1
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        depth++
    }
    return depth
};
