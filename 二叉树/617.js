// 617. 合并二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) { // 递归 前序遍历
    const preOrder = (root1, root2) => {
        if (!root1 && !root2) return null
        if (!root1) return root2
        if (!root2) return root1
        root1.val += root2.val
        root1.left = preOrder(root1.left, root2.left)
        root1.right = preOrder(root1.right, root2.right)
        return root1
    }
    return preOrder(root1, root2)
};

var mergeTrees = function(root1, root2) { // 迭代
    if (root1 === null) return root2
    if (root2 === null) return root1

    let queue = []
    queue.push(root1)
    queue.push(root2)

    while (queue.length) {
        let cur1 = queue.shift()
        let cur2 = queue.shift()
        cur1.val += cur2.val
        if (cur1.left && cur2.left) {
            queue.push(cur1.left)
            queue.push(cur2.left)
        }
        if (cur1.right && cur2.right) {
            queue.push(cur1.right)
            queue.push(cur2.right)
        }
        if (!cur1.left && cur2.left) {
            cur1.left = cur2.left
        }
        if (!cur1.right && cur2.right) {
            cur1.right = cur2.right
        }
    }
    return root1
};
