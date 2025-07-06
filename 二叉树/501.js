// 501. 二叉搜索树中的众数

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
 * @return {number[]}
 */
var findMode = function(root) { // 中序遍历 + map 暴力解题
    let map = new Map()
    const inOrder = (root) => {
        if (!root) return 
        inOrder(root.left)
        map.set(root.val, (map.get(root.val) || 0) + 1)
        inOrder(root.right)
    }
    inOrder(root)
    let arr = [...map]
    arr.sort((a,b) => b[1] - a[1])
    let res = []
    let maxCount = arr[0][1]
    for (let item of arr) {
        if (item[1] === maxCount) {
            res.push(item[0])
        }
    }
    return res
};


// 此函数使用中序遍历方法找出二叉搜索树中的众数
var findMode = function(root) { 
    let res = [] // 存储众数的结果数组
    let pre = null // 跟踪前一个节点
    let count = 0 // 当前值的计数
    let maxCount = 0 // 最大计数
    
    const inOrder = (root) => {
        if (!root) return
        
        // 先遍历左子树
        inOrder(root.left)
        
        // 处理当前节点
        // 如果前一个节点存在且值等于当前节点的值，则计数加1
        if (pre && pre.val === root.val) {
            count++
        } else {
            // 否则，计数重置为1
            count = 1
        }
        
        // 为什么不能用pre.val代替root.val?
        // 1. 当pre为null时(第一个节点)，pre.val会报错
        // 2. 当当前节点与前一个节点值不同时，我们要记录的是当前节点的值
        // 3. 即使当前节点与前一个节点值相同，使用root.val更清晰地表达我们记录的是当前节点的值
        
        // 如果当前计数等于最大计数，则将当前节点的值添加到结果数组
        if (count === maxCount) res.push(root.val)
        
        // 如果当前计数大于最大计数，则重置结果数组，并将当前节点的值添加到结果数组
        if (count > maxCount) {
            res = []
            maxCount = count
            res.push(root.val)
        }
        
        // 更新pre为当前节点
        pre = root
        
        // 再遍历右子树
        inOrder(root.right)
    }
    
    // 调用中序遍历函数
    inOrder(root)
    
    // 返回结果数组
    return res
};

// 示例: 对于二叉搜索树 [1, 2, 2, 3, 3, 3]
// - 当遍历到第一个节点(1)时，pre为null，count=1，maxCount=0，所以res=[1]
// - 当遍历到第二个节点(2)时，pre.val=1 !== root.val=2，count=1，maxCount=1，所以res=[1, 2]
// - 当遍历到第三个节点(2)时，pre.val=2 === root.val=2，count=2，maxCount=1，所以res=[2]
// - 当遍历到第四个节点(3)时，pre.val=2 !== root.val=3，count=1，maxCount=2，所以res=[2]
// - 当遍历到第五个节点(3)时，pre.val=3 === root.val=3，count=2，maxCount=2，所以res=[2, 3]
// - 当遍历到第六个节点(3)时，pre.val=3 === root.val=3，count=3，maxCount=2，所以res=[3]