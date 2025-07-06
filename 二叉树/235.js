// 235. 二叉搜索树的最近公共祖先

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) { // 递归
    // 使用递归的方法
    // 1. 使用给定的递归函数lowestCommonAncestor
    // 2. 确定递归终止条件
    if (!root) return root
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q) // 向左子树遍历
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q) //向右子树遍历
    return root
};


var lowestCommonAncestor = function(root, p, q) { //迭代
    if (p.val > q.val) return lowestCommonAncestor(root, q, p)
    while (root) {
        if (root.val > p.val && root.val > q.val) root = root.left // 向左子树遍历
        else if (root.val < p.val && root.val < q.val) root = root.right //向右子树遍历
        else return root
    }
} 
    
