// 113. 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = []
    if (!root) return res
    let path = [root.val]
    const dfs = (root, tar) => {
        if (!root.left && !root.right && tar === 0) {
            res.push([...path])
            return 
        }
        if (!root.left && !root.right) return 

        if (root.left) {
            path.push(root.left.val)
            dfs(root.left, tar - root.left.val)
            path.pop()
        }
        if (root.right) {
            path.push(root.right.val)
            dfs(root.right, tar - root.right.val)
            path.pop()
        }
    }
    dfs(root, targetSum - root.val)
    return res
};  