// 669. 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) { // 递归
    if (!root) return root
    if (root.val < low) {
        return trimBST(root.right, low, high)
    } else if (root.val > high) {
        return trimBST(root.left, low, high)
    } else {
        root.left = trimBST(root.left, low, high)
        root.right = trimBST(root.right, low, high)
    }
    return root
};

var trimBST = function (root, low, high) { // 迭代
    // 处理空树情况
    if (!root) return root
    
    // 第一步：处理根节点不在[low, high]区间的情况
    // 通过不断调整根节点指针，直到找到满足条件的根节点
    while (root && (root.val < low || root.val > high)) {
        if (root.val < low) {
            // 根节点值小于low，说明左子树都小于low，直接舍弃左子树
            root = root.right
        } else if (root.val > high) {
            // 根节点值大于high，说明右子树都大于high，直接舍弃右子树
            root = root.left
        }
    }
    
    // 第二步：处理左子树中小于low的节点
    let cur = root
    while (cur) {
        // 当前节点的左子节点值小于low，则其左子树都小于low
        // 将左子节点替换为其右子树（右子树可能包含有效节点）
        while (cur.left && cur.left.val < low) {
            cur.left = cur.left.right
        }
        // 继续处理左子树
        cur = cur.left
    }
    
    // 第三步：处理右子树中大于high的节点
    cur = root
    while (cur) {
        // 当前节点的右子节点值大于high，则其右子树都大于high
        // 将右子节点替换为其左子树（左子树可能包含有效节点）
        while (cur.right && cur.right.val > high) {
            cur.right = cur.right.left
        }
        // 继续处理右子树
        cur = cur.right
    }
    
    return root
};

