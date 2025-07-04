// 654. 最大二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 根据数组构建最大二叉树
 * @param {number[]} nums 输入数组
 * @return {TreeNode} 构建完成的二叉树根节点
 */
var constructMaximumBinaryTree = function(nums) {
    // 基本情况：当数组只有一个元素时，直接返回该节点
    if (nums.length === 1) return new TreeNode(nums[0])
    
    // 初始化最大值和索引
    let max = 0
    let maxIndex = 0
    
    // 遍历数组找到最大值及其索引
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {    
            max = nums[i]
            maxIndex = i
        }
    }
    
    // 创建当前最大值节点作为根节点
    let root = new TreeNode(max)
    
    // 递归构建左子树：使用最大值左边的子数组
    if (maxIndex > 0) root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
    
    // 递归构建右子树：使用最大值右边的子数组
    if (maxIndex < nums.length - 1) root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))
    
    return root
};