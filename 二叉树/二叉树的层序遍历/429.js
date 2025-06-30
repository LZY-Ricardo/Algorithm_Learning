// 429. N 叉树的层序遍历

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [] // 存储最终结果的数组
    let queue = [] // 使用队列辅助层序遍历
    if (root) queue.push(root) // 如果根节点存在，加入队列
    
    while(queue.length) { // 当队列不为空时循环
        let len = queue.length // 记录当前层的节点数
        let temp = [] // 临时存储当前层的节点值
        
        while(len--) { // 处理当前层的所有节点
            let cur = queue.shift() // 取出队列头部节点
            temp.push(cur.val) // 将节点值存入当前层数组
            
            // 如果当前节点有子节点，将所有子节点加入队列
            if (cur.children) {
                for (const child of cur.children) {
                    queue.push(child)
                }
            }
        }
        res.push(temp) // 将当前层结果存入最终结果
    }
    return res
};

