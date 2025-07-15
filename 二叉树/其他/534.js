// 543. 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0
    const dfs = (root) => {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        maxDiameter = Math.max(maxDiameter, left + right)
        return Math.max(left, right) + 1 
    }
    dfs(root)
    return maxDiameter
};

var diameterOfBinaryTree = function(root) {
    // 处理空树情况
    if (!root) return 0;
    
    // 用于跟踪最大直径
    let maxDiameter = 0;
    
    // 深度优先搜索函数，返回当前节点的深度
    const dfs = (node) => {
        if (!node) return 0;
        
        // 递归计算左右子树深度
        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);
        
        // 更新最大直径（左右子树深度之和）
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        // 返回当前节点的深度（左右子树最大深度+1）
        return Math.max(leftDepth, rightDepth) + 1;
    };
    
    // 执行DFS遍历
    dfs(root);
    
    // 返回最大直径
    return maxDiameter;
};