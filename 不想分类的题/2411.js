// 2411. 按位或最大的最小子数组长度
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    const pos = new Array(31).fill(-1); // 记录每个比特位最后一次出现的位置
    let max_or = 0; // 记录从i到n-1的或运算结果

    for (let i = n - 1; i >= 0; --i) {
        max_or |= nums[i];
        // 更新比特位的位置
        for (let bit = 0; bit < 31; ++bit) {
            if (nums[i] & (1 << bit)) {
                pos[bit] = i;
            }
        }
        // 计算最小的j使得B[i][j] = max_or
        let j = i;
        for (let bit = 0; bit < 31; ++bit) {
            if (max_or & (1 << bit)) {
                if (pos[bit] !== -1) {
                    j = Math.max(j, pos[bit]);
                }
            }
        }
        answer[i] = j - i + 1;
    }
    return answer;
};