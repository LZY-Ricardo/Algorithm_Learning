// 144. 二叉树的前序遍历

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
var preorderTraversal = function(root) { // 二叉树 前序遍历 递归
    let res = []
    const preorder = function(cur) {
        if (!cur) return
        res.push(cur.val)
        preorder(cur.left)
        preorder(cur.right)
    }
    preorder(root)  
    return res
};

var preorderTraversal = function(root) { // 二叉树 前序遍历 迭代法
    let res = []
    let stack = []
    if (!root) return res
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return res
};

var preorderTraversal = function(root) { // 二叉树 前序遍历 统一迭代法
    let res = []
    let stack = []
    if (root) stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            res.push(stack.pop().val)
            continue
        }
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
        stack.push(cur)
        stack.push(null)
    }
    return res
};