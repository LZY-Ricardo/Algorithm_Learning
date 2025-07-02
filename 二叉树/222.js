// 222. 完全二叉树的节点个数
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
var countNodes = function(root) { // 层序遍历
    let count = 0
    let queue = []
    if (root) queue.push(root)
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let cur = queue.shift()
            count++
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
    }
    return count
};

var countNodes = function(root) { // 后序遍历 
    if (!root) return 0
    let leftCount = countNodes(root.left)
    let rightCount = countNodes(root.right)
    let count = leftCount + rightCount + 1
    return count
};


var countNodes = function(root) {
    if (!root) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
};

/**
 * 计算二叉树的节点总数
 * 优化思路：结合满二叉树特性减少递归次数
 * 满二叉树节点数公式：2^(深度+1) - 1
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} 二叉树的节点总数
 */
var countNodes = function(root) { // 利用满二叉树的特性 同时采用后序遍历
    // 边界条件：空树返回0
    if (!root) return 0
    
    // 初始化左右指针，用于计算深度
    let left = root.left
    let right = root.right
    let leftDepth = 0  // 左子树最左深度
    let rightDepth = 0 // 右子树最右深度
    
    // 计算左子树的最左深度（一直向左走）
    while (left) {
        left = left.left
        leftDepth++
    }
    
    // 计算右子树的最右深度（一直向右走）
    while (right) {
        right = right.right
        rightDepth++
    }
    
    // 如果左右深度相等，说明是满二叉树，直接使用公式计算
    if (leftDepth === rightDepth) return 2 ** (leftDepth + 1) - 1
    
    // 非满二叉树，递归计算左右子树节点数并相加
    let leftCount = countNodes(root.left)
    let rightCount = countNodes(root.right)
    let count = leftCount + rightCount + 1  // +1表示当前根节点
    return count
};

