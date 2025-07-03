// 404. 左叶子之和

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
/**
 * 计算二叉树中所有左叶子节点的值之和（层序遍历实现）
 * 左叶子节点定义：是父节点的左子节点，且自身没有左右子节点
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} 所有左叶子节点的值之和
 */
var sumOfLeftLeaves = function (root) { // 层序遍历 
    let res = 0  // 存储结果的累加器
    let queue = []  // 层序遍历使用的队列
    
    // 根节点非空时初始化队列
    if (root) queue.push(root)
    
    // 队列不为空时继续遍历
    while (queue.length) {
        let cur = queue.shift()  // 取出队首节点
        
        // 判断当前节点的左子节点是否为左叶子节点
        if (cur.left && !cur.left.left && !cur.left.right) {
            res += cur.left.val  // 累加左叶子节点的值
        }
        
        // 将左右子节点加入队列（如果存在）
        if (cur.left) queue.push(cur.left)
        if (cur.right) queue.push(cur.right)
    }
    
    return res  // 返回累加结果
};

/**
 * 计算二叉树中所有左叶子节点的值之和（递归实现）
 * 采用后序遍历顺序（左-右-根）确保能访问到所有左叶子节点
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} 所有左叶子节点的值之和
 */
var sumOfLeftLeaves = function (root) { // 递归
    let res = 0  // 存储结果的累加器
    
    /**
     * 深度优先搜索辅助函数
     * @param {TreeNode} root - 当前遍历的节点
     */
    const dfs = function (root) {
        if (!root) return 0  // 递归终止条件：空节点
        
        dfs(root.left)  // 递归遍历左子树
        dfs(root.right)  // 递归遍历右子树
        
        // 在后序位置判断左子节点是否为左叶子节点
        if (root.left && !root.left.left && !root.left.right) {
            res += root.left.val  // 累加左叶子节点的值
        }
    }
    
    dfs(root)  // 从根节点开始递归
    return res  // 返回累加结果
}

var sumOfLeftLeaves = function (root) {
    //采用后序遍历 递归遍历
    // 1. 确定递归函数参数
    const dfs = (root) => {
        // 2. 确定终止条件
        if (!root) return 0
        let leftNumber = dfs(root.left)
        let rightNumber = dfs(root.right)
        // 3. 单层递归逻辑
        let middleNumber = 0
        if (root.left && !root.left.left && !root.left.right) {
            middleNumber = root.left.val
        }
        let number = leftNumber + rightNumber + middleNumber
        return number
    }
    return dfs(root)
}
