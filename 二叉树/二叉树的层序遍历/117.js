// 117. 填充每个节点的下一个右侧节点指针 II
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    let queue = []
    if (root) queue.push(root)
    while (queue.length) {
        let len = queue.length
        let pre = null
        while (len--) {
            let cur = queue.shift()
            if (pre) pre.next = cur
            pre = cur
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
    }
    return root
};

/**
 * 填充二叉树每个节点的next指针，使其指向同层右侧节点
 * 若右侧无节点则为null，适用于任意二叉树（非完美二叉树也可）
 * @param {Node} root - 二叉树的根节点
 * @return {Node} - 处理后的根节点
 */
var connect = function(root) {
    /**
     * 辅助函数：处理节点连接和下一层起始节点记录
     * @param {Node} p - 当前要连接的节点
     */
    /**
     * 辅助函数：处理节点连接和下一层起始节点记录
     * @param {Node} p - 当前要连接的节点
     */
    const handle = function(p) {
        if (last) {
            // 如果已有上一个节点，将上一个节点的next指向当前节点
            // 如果已有上一个节点，将上一个节点的next指向当前节点
            last.next = p;
        }
        if (!nextStart) {
            // 如果下一层起始节点未设置，将当前节点设为下一层起始节点
            // 如果下一层起始节点未设置，将当前节点设为下一层起始节点
            nextStart = p;
        }
        // 更新last为当前节点，作为下一个节点的"上一个节点"
        // 更新last为当前节点，作为下一个节点的"上一个节点"
        last = p;
    };

    // 记录当前层的起始节点
    // 记录当前层的起始节点
    let start = null;
    if (root) {
        start = root;
    }

    // 遍历每一层，直到没有下一层节点
    // 遍历每一层，直到没有下一层节点
    while (start) {
        // 重置当前层的最后一个节点和下一层的起始节点
        // 重置当前层的最后一个节点和下一层的起始节点
        var last = null
        var nextStart = null;

        // 遍历当前层的所有节点（通过next指针连接）
        // 遍历当前层的所有节点（通过next指针连接）
        for (let p = start; p !== null; p = p.next) {
            // 处理左子节点（如果存在）
            // 处理左子节点（如果存在）
            if (p.left) handle(p.left);
            // 处理右子节点（如果存在）
            // 处理右子节点（如果存在）
            if (p.right) handle(p.right);
        }

        // 移动到下一层
        // 移动到下一层
        start = nextStart;
    }

    return root;
};