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
    const dfs = (root, sum) => {
        if (!root) return false
        // 如果是叶子节点，检查当前路径和是否等于目标值
        if (!root.left && !root.right) {
            return sum === targetSum
        }
        // 递归检查左右子树，任一子树满足即可
        return (root.left ? dfs(root.left, sum + root.left.val) : false) || 
               (root.right ? dfs(root.right, sum + root.right.val) : false)
    }
    // 初始调用时传入根节点值
    return root ? dfs(root, root.val) : false
};

/**
 * 判断二叉树中是否存在从根节点到叶子节点的路径和等于目标值
 * @param {TreeNode} root - 二叉树根节点
 * @param {number} targetSum - 目标路径和
 * @return {boolean} - 是否存在符合条件的路径
 */
var hasPathSum = function (root, targetSum) {
    /**
     * 递归辅助函数，回溯法检查路径和
     * @param {TreeNode} root - 当前节点
     * @param {number} tar - 剩余需要匹配的目标值
     * @return {boolean}
     */
    const traversal = (root, tar) => {
        // 情况1：找到符合条件的叶子节点（剩余目标值为0且是叶子节点）
        if (tar === 0 && !root.left && !root.right) return true
        // 情况2：到达叶子节点但路径和不匹配
        if (!root.left && !root.right) return false
        
        // 检查左子树
        if (root.left) {
            tar -= root.left.val  // 尝试减去左子节点值
            if (traversal(root.left, tar)) return true  // 递归检查左子树
            tar += root.left.val  // 回溯，恢复目标值
        }
        
        // 检查右子树
        if (root.right) {
            tar -= root.right.val  // 尝试减去右子节点值
            if (traversal(root.right, tar)) return true  // 递归检查右子树
            tar += root.right.val  // 回溯，恢复目标值
        }
        
        // 当前节点的左右子树都不满足条件
        return false
    }
    
    // 空树直接返回false
    if (!root) return false
    // 初始调用，传入根节点值和调整后的目标值（减去根节点值）
    return traversal(root, targetSum - root.val)
};



/**
 * 使用BFS层序遍历判断二叉树中是否存在从根节点到叶子节点的路径和等于目标值
 * @param {TreeNode} root - 二叉树根节点
 * @param {number} targetSum - 目标路径和
 * @return {boolean} - 是否存在符合条件的路径
 */
var hasPathSum = function (root, targetSum) {
    // 空树直接返回false
    if (!root) return false
    
    // 队列存储待处理的节点
    let queue = [root]
    // 与队列同步的数组，存储从根节点到当前节点的路径和
    let val = [0]
    
    // BFS循环处理队列中的节点
    while (queue.length) {
        // 取出队列首部的节点和对应的当前路径和
        let curNode = queue.shift()
        let curVal = val.shift()
        
        // 累加当前节点的值
        curVal += curNode.val
        
        // 检查是否到达叶子节点且路径和等于目标值
        if (!curNode.left && !curNode.right && curVal === targetSum) {
            return true
        }
        
        // 将左子节点和当前路径和加入队列
        if (curNode.left) {
            queue.push(curNode.left)
            val.push(curVal)  // 注意这里push的是当前路径和，不是0
        }
        
        // 将右子节点和当前路径和加入队列
        if (curNode.right) {
            queue.push(curNode.right)
            val.push(curVal)  // 注意这里push的是当前路径和，不是0
        }
    }
    
    // 遍历完所有路径仍未找到匹配的
    return false
};