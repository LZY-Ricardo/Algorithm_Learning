// 112. 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    
    const dfs = (node, currentSum) => {
        if (!node) return false
        
        // 更新当前路径和
        currentSum += node.val
        
        // 如果是叶子节点，检查路径和是否等于目标值
        if (!node.left && !node.right) {
            return currentSum === targetSum
        }
        
        // 递归检查左右子树，任一子树满足即可
        return dfs(node.left, currentSum) || dfs(node.right, currentSum)
    }
    
    return dfs(root, 0)
};



var hasPathSum = function (root, targetSum) {
    if (!root) return false

    const dfs = (node, num) => {
        if (num === 0 && !node.left && !node.right) {
            return true
        }
        
        if (node.left) {
            num -= node.left.val
            if (dfs(node.left, num)) return true
            num += node.left.val
        }

        if (node.right) {
            num -= node.right.val
            if (dfs(node.right, num)) return true
            num += node.right.val
        }
        return false
    }

    return dfs(root, targetSum - root.val)
};


