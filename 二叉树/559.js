// 559. N 叉树的最大深度
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    let depth = 0
    for (let child of root.children) {
        depth = Math.max(depth, maxDepth(child))
    }
    return depth + 1
};

var maxDepth = function(root) {
    if(!root) return 0
    let count = 0
    let queue = [root]
    while(queue.length) {
        let size = queue.length
        count++
        while(size--) {
            let node = queue.shift()
            for (let item of node.children) {
                item && queue.push(item);
            }
        }
    }
    return count
};