// 102. 二叉树的层序遍历
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
// 二叉树的层序遍历
var levelOrder = function (root) {
    let res = []
    let queue = []
    if (root) {
        queue.unshift(root)
    }
    while (queue.length) {
        let len = queue.length
        let temp = []
        while (len--) {
            let cur = queue.pop()
            if (cur.left) {
                queue.unshift(cur.left)
            } 
            if (cur.right) {
                queue.unshift(cur.right)
            }
            temp.push(cur.val)
        }
        res.push(temp)
    }
    return res
}