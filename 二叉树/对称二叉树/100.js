// 100. 相同的树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const compare = function(l, r) {
        if (!l && !r) return true
        if (!l || !r || r.val !== l.val) return false
        let left = compare(l.left, r.left)
        let right = compare(l.right, r.right)
        return left && right
    }
    return compare(p, q)
};