// 108. 将有序数组转换为二叉搜索树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) { // 递归
    var buildTree = (nums, left, right) => {
        if (left > right) return null
        let mid = Math.floor(left + (right - left) / 2)
        let root = new TreeNode(nums[mid])
        root.left = buildTree(nums, left, mid - 1)
        root.right = buildTree(nums, mid + 1, right)
        return root
    }
    return buildTree(nums, 0, nums.length - 1)
};


var sortedArrayToBST = function(nums) {
    // 处理空数组情况
    if(nums.length===0) {
        return null;
    }
    
    // 初始化根节点（值暂设为0，后面会更新）
    let root = new TreeNode();
    
    // 使用三个队列来管理构建过程：
    // nodeQue - 存储待处理的节点
    // leftQue - 存储对应节点的处理区间左边界
    // rightQue - 存储对应节点的处理区间右边界
    let nodeQue = [root];             // 初始放入根节点
    let leftQue = [0];                // 初始区间是整个数组 [0, nums.length-1]
    let rightQue = [nums.length-1];  
    
    while(nodeQue.length) {
        // 取出当前节点及其对应的区间
        let curNode = nodeQue.pop();
        let left = leftQue.pop();
        let right = rightQue.pop();
        
        // 计算中间位置（选择中间元素作为当前节点的值）
        let mid = left + Math.floor((right-left)/2);
        
        // 设置当前节点的值
        curNode.val = nums[mid];      
        
        // 处理左半区间（构建左子树）
        if(left < mid) {
            curNode.left = new TreeNode();  // 创建左子节点（值暂设为0）
            nodeQue.push(curNode.left);      // 将左子节点加入待处理队列
            leftQue.push(left);              // 左子节点的处理区间是 [left, mid-1]
            rightQue.push(mid-1);
        }
        
        // 处理右半区间（构建右子树）
        if(right > mid) {
            curNode.right = new TreeNode(); // 创建右子节点（值暂设为0）
            nodeQue.push(curNode.right);      // 将右子节点加入待处理队列
            leftQue.push(mid+1);              // 右子节点的处理区间是 [mid+1, right]
            rightQue.push(right);
        }
    }
    return root;
};