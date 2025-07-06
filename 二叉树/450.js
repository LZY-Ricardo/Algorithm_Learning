// 450. 删除二叉搜索树中的节点

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) { // 递归
    if (!root) return root
    if (root.val === key) {
        if (!root.left && !root.right) {
            return null
        } else if (root.left && !root.right) {
            return root.left
        } else if (!root.left && root.right) {
            return root.right
        } else {
            let cur = root.right
            while (cur.left) {
                cur = cur.left
            }
            cur.left = root.left
            return root.right
        }
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root
};


var deleteNode = function(root, key) { // 迭代
    if (!root) return root
    let cur = root
    let pre = null
    while (cur) {
        if (cur.val === key) {
            if (!cur.left && !cur.right) {
                if (!pre) return null // 处理根节点情况
                if (pre.left === cur) pre.left = null
                else pre.right = null
                break
            } else if (cur.left && !cur.right) {
                if (!pre) return cur.left // 处理根节点情况
                if (pre.left === cur) pre.left = cur.left
                else pre.right = cur.left
                break
            } else if (!cur.left && cur.right) {
                if (!pre) return cur.right // 处理根节点情况
                if (pre.left === cur) pre.left = cur.right
                else pre.right = cur.right
                break
            } else if (cur.left && cur.right) {
                let temp = cur.right
                while (temp.left) {
                    temp = temp.left
                }
                temp.left = cur.left
                if (!pre) return cur.right // 处理根节点情况
                if (pre.left === cur) pre.left = cur.right
                else pre.right = cur.right
                break
            }
        } else {
            pre = cur
            if (cur.val > key) {
                cur = cur.left
            } else if (cur.val < key) {
                cur = cur.right
            }
        }
    }
    return root
};