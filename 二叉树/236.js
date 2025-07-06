// 236. 二叉树的最近公共祖先

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
var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = (root, p, q) => {
        // 2. 确定递归终止条件
        if (!root) return root
        if (root === p || root === q) return root
        // 3. 确定单层递归的逻辑
        let left = travelTree(root.left, p, q)
        let right = travelTree(root.right, p, q)
        if (left && right) return root
        if (left && !right) return left
        else if (!left && right) return right
        else return null
    }
    return travelTree(root, p, q)
};