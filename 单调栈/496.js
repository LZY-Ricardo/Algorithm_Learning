// 496. 下一个更大元素 I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 方法1: 先处理nums2，再查询nums1
/**
 * 查找nums1中每个元素在nums2中的下一个更大元素
 * @param {number[]} nums1 - 待查找的元素数组
 * @param {number[]} nums2 - 参考数组
 * @return {number[]} - 每个元素的下一个更大元素组成的数组
 */
var nextGreaterElement = function(nums1, nums2) {
    // 存储nums2中每个元素的下一个更大元素
    let hashTable = new Map()
    // 单调栈，存储nums2的索引
    let stack = []
    // 结果数组，初始化为-1
    let res = new Array(nums1.length).fill(-1)

    // 遍历nums2，构建单调栈和哈希表
    for (let i = 0; i < nums2.length; i++) {
        // 当栈不为空且当前元素大于栈顶元素时
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            // 弹出栈顶元素
            let index = stack.pop()
            // 记录栈顶元素的下一个更大元素
            hashTable.set(nums2[index], nums2[i])
        }
        // 将当前索引入栈
        stack.push(i)
    }

    // 遍历nums1，查询每个元素的下一个更大元素
    for (let i = 0; i < nums1.length; i++) {
        if (hashTable.has(nums1[i])) {
            res[i] = hashTable.get(nums1[i])
        }
    }

    return res
};

// 方法2: 边处理nums2边更新结果
/**
 * 查找nums1中每个元素在nums2中的下一个更大元素
 * @param {number[]} nums1 - 待查找的元素数组
 * @param {number[]} nums2 - 参考数组
 * @return {number[]} - 每个元素的下一个更大元素组成的数组
 */
var nextGreaterElement = function(nums1, nums2) {
    // 存储nums1中元素到索引的映射
    let hashTable = new Map()
    // 单调栈，存储nums2的索引
    let stack = []
    // 结果数组，初始化为-1
    let res = new Array(nums1.length).fill(-1)

    // 构建nums1元素到索引的映射
    nums1.forEach((item, index) => hashTable.set(item, index))

    // 初始化栈，放入第一个元素的索引
    stack.push(0)

    // 遍历nums2
    for (let i = 1; i < nums2.length; i++) {
        // 如果当前元素小于等于栈顶元素，直接入栈
        if (nums2[i] <= nums2[stack[stack.length - 1]]) {
            stack.push(i)
        } else {
            // 当栈不为空且当前元素大于栈顶元素时
            while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
                // 弹出栈顶元素
                let index = stack.pop()
                // 如果栈顶元素在nums1中存在，则更新结果
                if (hashTable.has(nums2[index])) {
                    res[hashTable.get(nums2[index])] = nums2[i]
                }
            }
            // 将当前索引入栈
            stack.push(i)
        }
    } 

    return res
};