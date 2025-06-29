// 199. 二叉树的右视图

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
var rightSideView = function(root) {
    let res = []
    let queue = []
    if (root) queue.push(root)
    while (queue.length) {
        let len = queue.length
        let temp = []
        while (len--) {
            let cur = queue.shift()
            temp.push(cur.val)
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        res.push(temp[temp.length - 1])
    }
    return res
};
