// 515. 在每个树行中找最大值
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
 * @return {number[]}
 */
/**
 * 解法1：层序遍历（BFS）找每层最大值
 * 时间复杂度：O(n) 每个节点访问一次
 * 空间复杂度：O(n) 队列最多存储n/2个节点（最后一层）
 */
var largestValues = function(root) { // 层序遍历
    let res = [] // 存储每层最大值的数组
    let queue = [] // 辅助队列
    if (root) queue.push(root) // 根节点入队
    
    while(queue.length) { // 当队列不为空时循环
        let len = queue.length // 当前层节点数
        let max = -Infinity // 初始化当前层最大值
        
        while (len--) { // 处理当前层所有节点
            let cur = queue.shift() // 取出队首节点
            max = Math.max(max, cur.val) // 更新当前层最大值
            
            // 将左右子节点加入队列（如果存在）
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        res.push(max) // 将当前层最大值存入结果
    }
    return res
};

/**
 * 解法2：先序遍历（DFS）找每层最大值
 * 时间复杂度：O(n) 每个节点访问一次
 * 空间复杂度：O(h) 递归栈深度为树高h
 */
var largestValues = function(root) { // 先序遍历
    if (!root) return [] // 空树返回空数组
    let res = [] // 存储每层最大值的数组
    
    const dfs = function(res, node, curHeight) {
        // 如果是第一次访问该层，直接存入节点值
        if (curHeight === res.length) {
            res.push(node.val)
        } else {
            // 否则比较并更新该层最大值
            res[curHeight] = Math.max(node.val, res[curHeight])
        }
        
        // 递归处理左右子树
        if (node.left) dfs(res, node.left, curHeight + 1)
        if (node.right) dfs(res, node.right, curHeight + 1)
    }
    
    dfs(res, root, 0) // 从根节点开始遍历
    return res
};