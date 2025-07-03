// 513. 找树左下角的值

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
var findBottomLeftValue = function(root) { // 层序遍历
    let queue = []
    let res = 0
    if (root) queue.push(root)
    while (queue.length) {
        let len = queue.length
        res = (queue[0].val)
        while (len--) {
            let cur = queue.shift()
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
    }
    return res
};

/**
 * 寻找二叉树最底层最左边的节点值
 * 使用深度优先搜索(DFS)遍历二叉树，记录当前最大深度和对应的最左节点值
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} 最底层最左边的节点值
 */
var findBottomLeftValue = function(root) { // 层序遍历
    // 初始化最大深度为负无穷，用于比较
    let maxDepth = -Infinity
    // 当前遍历深度，从0开始
    let depth = 0
    // 存储结果的变量
    let res = 0
    
    /**
     * DFS递归辅助函数
     * @param {TreeNode} root - 当前节点
     * @param {number} depth - 当前深度
     */
    const dfs = (root, depth) => {
        // 如果是叶子节点（没有左右子节点）
        if (!root.left && !root.right) {
            // 如果当前深度大于记录的最大深度，更新结果
            if (depth > maxDepth) {
                maxDepth = depth
                res = root.val
            }
        }
        // 优先遍历左子树（保证最左边的节点先被记录）
        if (root.left) {
            depth++
            dfs(root.left, depth)
            depth--
        }
        // 然后遍历右子树
        if (root.right) {
            depth++
            dfs(root.right, depth)
            depth--
        }
    }
    
    // 从根节点开始DFS遍历
    dfs(root, depth)
    return res
};


var findBottomLeftValue = function(root) { // 简化版递归
    let maxDepth = -Infinity
    let res = 0
    const dfs = (root, depth) => {
        if (!root.left && !root.right) {
            if (depth > maxDepth) {
                maxDepth = depth
                res = root.val
            }
        }
        if (root.left) dfs(root.left, depth + 1)
        if (root.right) dfs(root.right, depth + 1)
    }
    dfs(root, 1)
    return res
};
