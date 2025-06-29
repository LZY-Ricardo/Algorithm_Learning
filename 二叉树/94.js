// 94. 二叉树的中序遍历

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
var inorderTraversal = function(root) { // 二叉树 中序遍历 递归
    let res = []
    const dfs = function(cur) {
        if (!cur) return
        dfs(cur.left)
        res.push(cur.val)
        dfs(cur.right)
    }
    dfs(root)
    return res
};

var inorderTraversal = function(root) { // 二叉树 中序遍历 迭代法
    let res = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
};

var inorderTraversal = function(root) { // 二叉树 中序遍历 统一迭代法
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
        stack.push(cur)
        stack.push(null)
        if (cur.left) stack.push(cur.left)
    }
    return res
};