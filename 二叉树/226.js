// 226. 翻转二叉树
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
 * @return {TreeNode}
 */
 // 翻转二叉树（前序遍历实现）
var invertTree = function(root) { 
    // 递归终止条件：如果当前节点为空，直接返回null
    if (!root) return root
    
    // 保存当前节点的左右子树引用
    let left = root.left
    let right = root.right
    
    // 交换当前节点的左右子树（前序遍历的「根」处理阶段）
    root.left = right
    root.right = left
    
    // 递归翻转左子树（前序遍历的「左」处理阶段）
    invertTree(root.left)
    // 递归翻转右子树（前序遍历的「右」处理阶段）
    invertTree(root.right)
    
    // 返回翻转后的当前节点
    return root  
};

var invertTree = function(root) { // 迭代法
    var invertNode = function(node) {
        if (!node) return node
        let left = node.left
        let right = node.right
        node.left = right
        node.right = left
    }
    let stack = []
    if (!root) return root
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            invertNode(stack.pop())
            continue
        } else {
            if (cur.right) stack.push(cur.right)
            if (cur.left) stack.push(cur.left)
            stack.push(cur)
            stack.push(null)
        }
    }
    return root
};

var invertTree = function(root) { // 层序遍历 
    var invertNode = function(node) {
        if (!node) return node
        let left = node.left
        let right = node.right
        node.left = right
        node.right = left
    }
    let queue = []
    if (root) queue.push(root)
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let cur = queue.shift()
            invertNode(cur)
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
    }
    return root
};