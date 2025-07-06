// 530. 二叉搜索树的最小绝对差

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
var getMinimumDifference = function(root) { // 递归 中序遍历
    let pre = null // 用来记录前一个节点的值
    let res = Infinity
    const inOrder = (root) => {
        if (!root) return
        inOrder(root.left)
        if (pre !== null) {
            // 更新 res
            res = Math.min(res, root.val - pre)
        }
        // 更新 pre
        pre = root.val
        inOrder(root.right)
    }
    inOrder(root)
    return res
};


var getMinimumDifference = function(root) { // 迭代
    let stack = []
    let res = Infinity
    let pre = null
    if (root) stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            cur = stack.pop()
            if (pre) res = Math.min(res, cur.val - pre.val)
            pre = cur
        } else {
            if (cur.right) stack.push(cur.right)
            stack.push(cur)
            stack.push(null)
            if (cur.left) stack.push(cur.left)
        }
    }
    return res
};