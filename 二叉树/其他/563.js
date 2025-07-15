// 563. 二叉树的坡度
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
var findTilt = function(root) {
    if (!root) return 0
    // 定义坡度总和
    let totalTilt = 0
    const dfs = (root) => {
        if (!root) return 0
        // 计算左子树节点和
        const leftSum = dfs(root.left)
        // 计算右子树节点和
        const rightSum = dfs(root.right)
        // 计算当前节点的坡度并累加到坡度总和
        totalTilt += Math.abs(leftSum - rightSum)
        // 返回当前节点的节点和（包括左子树、右子树和当前节点本身）
        return leftSum + rightSum + root.val
    }
    dfs(root)
    return totalTilt
};