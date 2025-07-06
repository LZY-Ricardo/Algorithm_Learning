// 538. 把二叉搜索树转换为累加树

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
var convertBST = function(root) { // 递归
    let pre = 0
    const traversal = (root) => {
        if (!root) return null
        traversal(root.right)
        root.val += pre
        pre = root.val
        traversal(root.left)
    }  
    traversal(root)
    return root
};

var convertBST = function(root) { // 迭代
    if (!root) return root
    let pre = 0
    let stack = [root]
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            cur = stack.pop()
            cur.val += pre
            pre = cur.val
        } else {
            if (cur.left) stack.push(cur.left)
            stack.push(cur)
            stack.push(null)
            if (cur.right) stack.push(cur.right)
        }
    }
    return root
};