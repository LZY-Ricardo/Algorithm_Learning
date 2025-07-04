// 105. 从前序与中序遍历序列构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 根据前序遍历和中序遍历结果构建二叉树
 * @param {number[]} preorder 前序遍历结果
 * @param {number[]} inorder 中序遍历结果
 * @return {TreeNode} 构建完成的二叉树根节点
 */
var buildTree = function(preorder, inorder) {
    // 空数组处理：如果前序遍历为空，返回null
    if (!preorder.length) return null
    
    // 前序遍历第一个元素就是根节点
    let node = preorder[0]
    let tree = new TreeNode(node)
    
    // 单元素处理：如果只有一个元素，直接返回该节点
    if (preorder.length === 1) return tree
    
    // 在中序遍历中找到根节点的位置
    let index = inorder.indexOf(node)
    
    // 递归构建左子树：前序数组取1到index+1，中序数组取0到index
    tree.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    
    // 递归构建右子树：前序数组取index+1之后，中序数组取index+1之后
    tree.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
    
    return tree
};