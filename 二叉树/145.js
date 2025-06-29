// 145. 二叉树的后序遍历

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
var postorderTraversal = function(root) { // 二叉树 后序遍历 递归
    let res = []
    const dfs = function(cur) {
        if (!cur) return
        dfs(cur.left)
        dfs(cur.right)
        res.push(cur.val)
    }
    dfs(root)
    return res
};

var postorderTraversal = function(root) { // 二叉树 后序遍历 迭代法
    let res = []
    let stack = []
    if (!root) return res
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        res.unshift(cur.val)
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }
    return res
};

var postorderTraversal = function(root) { // 二叉树 后序遍历 统一迭代法
    let res = []
    let stack = []
    if (root) stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            res.push(stack.pop().val)
            continue
        }
        stack.push(cur)
        stack.push(null)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return res
};
