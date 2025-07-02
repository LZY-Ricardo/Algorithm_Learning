// 257. 二叉树的所有路径
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 收集二叉树中所有从根节点到叶子节点的路径
 * 算法思路：使用前序遍历(根-左-右)递归遍历树，记录路径并在叶子节点处保存结果
 * @param {TreeNode} root - 二叉树的根节点
 * @return {string[]} 包含所有路径的字符串数组，路径格式如"1->2->3"
 */
var binaryTreePaths = function(root) { // 前序遍历
    // 存储所有路径结果的数组
    let res = []
    // 存储当前路径节点值的数组
    let path = []
    
    /**
     * 深度优先搜索(DFS)辅助函数
     * @param {TreeNode} root - 当前遍历的节点
     * @param {number[]} path - 当前路径的节点值数组
     * @param {string[]} res - 存储所有路径结果的数组
     */
    const dfs = function(root, path, res) {
        // 递归终止条件：当前节点为空，直接返回
        if (!root) return
        
        // 将当前节点值加入路径
        path.push(root.val)
        
        // 叶子节点判断：如果当前节点没有左右子节点
        if (!root.left && !root.right) {
            // 将路径数组转换为字符串格式(如"1->2->3")并添加到结果数组
            res.push(path.join('->'))
            return
        }
        
        // 递归遍历左子树
        if (root.left) {
            dfs(root.left, path, res)
            // 回溯：从路径中移除当前左子节点值，返回到父节点
            path.pop()
        }
        
        // 递归遍历右子树
        if (root.right) {
            dfs(root.right, path, res)
            // 回溯：从路径中移除当前右子节点值，返回到父节点
            path.pop()
        }
    }
    
    // 从根节点开始DFS遍历
    dfs(root, path, res)
    // 返回所有收集到的路径
    return res
};

var binaryTreePaths = function(root) {
   //递归遍历+递归三部曲
   let res = [];
   //1. 确定递归函数 函数参数
   const getPath = function(node,curPath) {
    //2. 确定终止条件，到叶子节点就终止
       if(node.left === null && node.right === null) {
           curPath += node.val;
           res.push(curPath);
           return;
       }
       //3. 确定单层递归逻辑
       curPath += node.val + '->';
       node.left && getPath(node.left, curPath);
       node.right && getPath(node.right, curPath);
   }
   getPath(root, '');
   return res;
};

/**
 * 收集二叉树中所有从根节点到叶子节点的路径（迭代法实现）
 * 算法思路：使用栈模拟前序遍历，同步维护节点栈和路径栈，记录遍历路径
 * @param {TreeNode} root - 二叉树的根节点
 * @return {string[]} 包含所有路径的字符串数组，路径格式如"1->2->3"
 */
var binaryTreePaths = function(root) {
    // 边界条件：空树直接返回空数组
    if (!root) return []
    
    // 存储所有路径结果的数组
    let res = []
    // 路径栈：存储与节点栈对应的路径字符串
    let paths = ['']
    // 节点栈：用于迭代遍历的栈结构（模拟前序遍历）
    let stack = [root]
    
    // 栈不为空时继续遍历
    while (stack.length) {
        // 弹出当前节点（栈顶元素）
        let node = stack.pop()
        // 弹出与当前节点对应的路径
        let path = paths.pop()
        
        // 叶子节点判断：如果当前节点没有左右子节点
        if (!node.left && !node.right) {
            // 将当前路径拼接节点值后添加到结果数组
            res.push(path + node.val)
            continue
        }
        
        // 非叶子节点：拼接当前节点值和箭头
        path += node.val + '->'
        
        // 先压右子节点（栈后进先出特性保证前序遍历：根->左->右）
        if (node.right) {
            stack.push(node.right)
            paths.push(path)
        }
        
        // 再压左子节点
        if (node.left) {
            stack.push(node.left)
            paths.push(path)
        }
    }
    
    // 返回所有收集到的路径
    return res
};