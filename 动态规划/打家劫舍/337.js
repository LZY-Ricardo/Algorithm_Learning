// 337. 打家劫舍 III
// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，
// 聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 
// 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
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
 * @return {number}
 */
var rob = function(root) {
    // 后序遍历
    const dfs = (root) => {
        // 递归出口
        if (!root) return [0, 0]
        // 遍历左子树
        let left = dfs(root.left)
        // 遍历右子树
        let right = dfs(root.right)
        // 偷当前节点 左子树不偷 + 右子树不偷 + 当前节点值 0下标表示当前下标不偷 1下标表示当前下标偷
        let doRob = root.val + left[0] + right[0]
        // 不偷当前节点 左子树偷或不偷 右子树偷或不偷 取较大值
        let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        // 返回当前节点的所偷的最大金额
        return [notRob, doRob]
    }
    let rootRes = dfs(root)
    return Math.max(rootRes[0], rootRes[1])
}
