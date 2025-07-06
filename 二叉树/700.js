// 700. 二叉搜索树中的搜索 

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
 * @param {number} val
 * @return {TreeNode}
 */

// 递归第一步 确定函数的参数和返回值
var searchBST = function(root, val) { //递归
    // 递归第二步 确定终止条件
    if (!root) return null
    if (root.val === val) return root
    // 递归第三步 确定单层递归逻辑
    if (root.val > val) return searchBST(root.left, val)  
    if (root.val < val) return searchBST(root.right, val)
};

var searchBST = function(root, val) { // 迭代
    while (root) {
        if (root.val === val) return root
        else if (root.val > val) root = root.left
        else root = root.right
    }
    return null
}