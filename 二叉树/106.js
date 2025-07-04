// 106. 从中序与后序遍历序列构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 根据中序遍历和后序遍历结果构建二叉树
 * @param {number[]} inorder - 中序遍历结果
 * @param {number[]} postorder - 后序遍历结果
 * @return {TreeNode} - 构建完成的二叉树根节点
 */
var buildTree = function(inorder, postorder) {
    // 后序遍历数组为空，返回null
    if (!postorder.length) return null
    
    // 后序遍历的最后一个元素是当前子树的根节点
    let node = postorder[postorder.length - 1]
    // 创建当前节点
    let tree = new TreeNode(node)
    
    // 如果后序遍历只有一个元素，直接返回当前节点
    if (postorder.length === 1) return tree
    
    // 在中序遍历中找到当前根节点的位置
    let index = inorder.indexOf(node)
    
    // 递归构建左子树：
    // 中序遍历取根节点左边的部分，后序遍历取相同长度的部分
    tree.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    
    // 递归构建右子树：
    // 中序遍历取根节点右边的部分，后序遍历取中间部分（去掉最后一个元素）
    tree.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1))
    
    return tree
};