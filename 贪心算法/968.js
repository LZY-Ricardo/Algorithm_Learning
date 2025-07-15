// 968. 监控二叉树
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
var minCameraCover = function(root) {
    let res = 0; // 记录需要安装的摄像头数量
    
    // 定义三种状态：
    // 0: 该节点未被覆盖
    // 1: 该节点安装了摄像头
    // 2: 该节点被覆盖但没有安装摄像头
    const postOrder = (root) => {
        // 空节点默认视为被覆盖(状态2)
        if (!root) return 2;
        
        // 后序遍历：先处理左右子树
        let left = postOrder(root.left);
        let right = postOrder(root.right);
        
        // 情况1：左右子树都被覆盖，当前节点未被覆盖
        if (left === 2 && right === 2) return 0;
        
        // 情况2：左右子树至少有一个未被覆盖，当前节点需要安装摄像头
        if (left === 0 || right === 0) {
            res++;
            return 1;
        }
        
        // 情况3：左右子树至少有一个安装了摄像头，当前节点被覆盖
        if (left === 1 || right === 1) return 2;
    };
    
    // 检查根节点是否被覆盖，若未被覆盖则需要额外安装摄像头
    if (postOrder(root) === 0) res++;
    
    return res;
};