// 300. 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 300. 最长递增子序列 - 贪心 + 二分查找解法
 * @param {number[]} nums - 输入的整数数组
 * @return {number} - 最长递增子序列的长度
 * 
 * 算法思路：
 * 使用贪心策略 + 二分查找，时间复杂度 O(n log n)
 * 核心思想：维护一个 tails 数组，其中 tails[i] 表示长度为 i+1 的递增子序列的最小末尾元素
 * 这样 tails 数组的长度就是最长递增子序列的长度
 */
var lengthOfLIS = function(nums) {
    // 边界条件：空数组或null直接返回0
    if (!nums || nums.length === 0) return 0;
    
    // tails[i] 表示长度为 i+1 的递增子序列的最小末尾元素
    // 这个数组始终保持严格递增，其长度就是最长递增子序列的长度
    let tails = [];
    
    // 遍历每个数字，构建 tails 数组
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        // 情况1：当前数字大于所有已知子序列的末尾
        // 说明可以扩展最长递增子序列，直接添加到 tails 末尾
        if (tails.length === 0 || num > tails[tails.length - 1]) {
            tails.push(num);
        } 
        // 情况2：当前数字小于等于某个子序列的末尾
        // 需要找到合适的位置进行替换，保持 tails 数组的性质
        else {
            // 使用二分查找找到第一个大于等于 num 的位置
            // 这个位置就是 num 应该替换的位置
            let left = 0;
            let right = tails.length - 1;
            
            // 二分查找模板：寻找左边界
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (tails[mid] < num) {
                    // 如果中间值小于 num，说明应该在右半部分继续查找
                    left = mid + 1;
                } else {
                    // 如果中间值大于等于 num，说明应该在左半部分继续查找
                    right = mid;
                }
            }
            
            // 找到的位置 left 就是应该替换的位置
            // 替换为更小的 num，为后续更长的子序列创造条件
            tails[left] = num;
        }
    }
    
    // tails 数组的长度就是最长递增子序列的长度
    return tails.length;
};

// 测试用例
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
// console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
// console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 1

// 动态规划解法（时间复杂度 O(n²)）
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0
    let res = 1
    // dp[i] 表示i之前包括i的以nums[i]结尾的最长递增子序列的长度
    // 初始化为1 因为每个元素自己就是一个子序列
    let dp = new Array(nums.length).fill(1)

    // 确定递推公式 dp[i] = max(dp[i], dp[j] + 1)

    // 遍历顺序
    // 从前往后遍历
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) { // 这里遍历顺序 也可以从后往前遍历 因为只需要知道之前的元素是否小于当前元素
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }

    return res
};
