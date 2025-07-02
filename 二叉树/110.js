// 110. 平衡二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 判断二叉树是否为平衡二叉树
 * 平衡二叉树定义：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1
 * @param {TreeNode} root - 二叉树的根节点
 * @return {boolean} 该二叉树是否为平衡二叉树
 */
var isBalanced = function(root) {
    /**
     * 后序遍历计算节点高度并同时检查平衡性
     * @param {TreeNode} node - 当前遍历的节点
     * @return {number} 若平衡返回当前节点高度，否则返回-1
     */
    var getHeight = (node) => {
        // 终止条件：空节点高度为0
        if (!node) return 0;
        
        // 递归计算左子树高度
        let leftHeight = getHeight(node.left);
        // 左子树不平衡，直接返回-1（剪枝）
        if (leftHeight === -1) return -1;
        
        // 递归计算右子树高度
        let rightHeight = getHeight(node.right);
        // 右子树不平衡，直接返回-1（剪枝）
        if (rightHeight === -1) return -1;
        
        // 判断当前节点是否平衡：左右子树高度差绝对值 > 1则不平衡
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        // 返回当前节点高度 = 左右子树最大高度 + 1（当前节点）
        return Math.max(leftHeight, rightHeight) + 1;
    };
    
    // 若getHeight返回-1表示不平衡，否则平衡
    return getHeight(root) !== -1;
};