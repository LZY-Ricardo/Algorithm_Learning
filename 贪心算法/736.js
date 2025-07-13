// 763. 划分字母区间
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // 存储结果数组
    let res = []
    
    // 创建哈希表记录每个字符最后出现的位置
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }
    
    // 初始化当前分区的左右边界
    let left = 0
    let right = 0
    
    // 遍历字符串
    for (let i = 0; i < s.length; i++) {
        // 更新当前分区的右边界为当前字符最后出现的位置
        right = Math.max(right, map.get(s[i]))
        
        // 如果当前位置等于右边界，说明找到一个分区
        if (i === right) {
            // 计算分区长度并加入结果数组
            res.push(right - left + 1)
            // 更新左边界为下一个字符的位置
            left = i + 1
        }
    }
    return res
};