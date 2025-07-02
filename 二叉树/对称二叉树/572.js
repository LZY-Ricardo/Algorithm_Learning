// 572. 另一棵树的子树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 判断二叉树 subRoot 是否是 root 的子树
 * @param {TreeNode} root - 主树的根节点
 * @param {TreeNode} subRoot - 子树的根节点
 * @return {boolean} 是否存在匹配的子树
 */
var isSubtree = function(root, subRoot) {
    /**
     * 辅助函数：判断两棵二叉树是否完全相同
     * @param {TreeNode} l - 树A的当前节点
     * @param {TreeNode} r - 树B的当前节点
     * @return {boolean} 两棵树是否完全相同
     */
    const compare = (l, r) => {
        // 若两个节点都为空，则相同
        if (!l && !r) return true;
        // 若一个为空另一个不为空，或值不相等，则不同
        if (!l || !r || l.val !== r.val) return false;
        // 递归比较左子树
        let left = compare(l.left, r.left);
        // 递归比较右子树
        let right = compare(l.right, r.right);
        // 左右子树都相同才认为整体相同
        return left && right;
    };
    
    // 主树为空时不可能包含子树
    if (!root) return false;
    // 当前节点为根的子树是否与 subRoot 相同
    if (compare(root, subRoot)) return true;
    // 递归检查左子树和右子树是否包含 subRoot
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
