// 572. 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const compare = (l, r) => { // 比较两棵树是否相同 如果当前节点值相同 并且左右子树也相同 则这两棵树相同
        if (!l && !r) return true
        if (!l || !r || l.val !== r.val) return false
        let left = compare(l.left, r.left)
        let right = compare(l.right, r.right)
        return left && right
    }
    if (!root) return false
    if (compare(root, subRoot)) return true 
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) // 递归比较左子树和右子树
};
