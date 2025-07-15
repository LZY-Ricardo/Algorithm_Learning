// 103. 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = []
    let queue = []
    if (root) queue.push(root)
    let flag = true
    while (queue.length) {
        let len = queue.length
        let temp = []
        while (len) {
            let cur = queue.shift()
            temp.push(cur.val)
            if (flag) {
                cur.left && queue.push(cur.left)
                cur.right && queue.push(cur.right)
            } else {
                cur.right && queue.push(cur.right)
                cur.left && queue.push(cur.left)
            }
            len--
        }
        res.push(temp)
        queue = queue.reverse()
        flag = !flag
    }
    return res
};