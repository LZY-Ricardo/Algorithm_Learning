// 101. 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) { // 迭代法 使用队列同时处理左右子树节点
    if (!root) return true
    let queue = [root.left, root.right]
    while (queue.length) {
        let left = queue.shift()
        let right = queue.shift()
        if (!left && !right) continue
        if (!left || !right || left.val !== right.val) return false
        queue.push(left.left, right.right, left.right, right.left)
    }
    return true
};

var isSymmetric = function(root) { // 递归法
    if (!root) return true
    const compare = function(left, right) {
        if (!left && !right) return true
        if (!left || !right || left.val !== right.val) return false
        let outside = compare(left.left, right.right)
        let inside = compare(left.right, right.left)
        return outside && inside
    }
    return compare(root.left, root.right)
};