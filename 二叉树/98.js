// 98. 验证二叉搜索树

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
 * @return {boolean}
 */

var isValidBST = function (root) {
    let arr = [];
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    }
    buildArr(root);
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] <= arr[i - 1])
            return false;
    }
    return true;
};


var isValidBST = function(root) {
    let pre = -Infinity
    const inOrder = (root) => {
        if (!root) return true
        let left = inOrder(root.left)
        if (pre >= root.val) return false
        pre = root.val
        let right = inOrder(root.right)
        return left && right
    }
    return inOrder(root)
};

// 此函数使用迭代中序遍历方法检查二叉树是否为有效的二叉搜索树(BST)
var isValidBST = function (root) {
    // 空树被视为有效BST
    if (!root) return true
    
    // 初始化栈，并将根节点入栈
    let stack = [root]
    // 初始化pre为负无穷，用于跟踪前一个处理过的节点的值
    let pre = -Infinity
    
    // 当栈不为空时
    while (stack.length) {
        // 弹出栈顶元素
        let cur = stack.pop()
        
        // 如果cur为null，说明下一个弹出的元素是要处理的节点
        if (!cur) {
            // 弹出要处理的节点
            cur = stack.pop()
            // 检查当前节点的值是否大于前一个处理过的节点的值
            // 如果不是，则不是有效的BST
            if (pre >= cur.val) return false
            // 更新pre为当前节点的值
            pre = cur.val
        } else {
            // 如果cur不为null，则进行以下操作
            // 1. 如果有右子节点，将右子节点入栈
            if (cur.right) stack.push(cur.right)
            // 2. 将当前节点入栈
            stack.push(cur)
            // 3. 推入null作为标记
            stack.push(null)
            // 4. 如果有左子节点，将左子节点入栈
            if (cur.left) stack.push(cur.left)
        }
    }
    
    // 循环结束后返回true，表示是有效的BST
    return true 
};
