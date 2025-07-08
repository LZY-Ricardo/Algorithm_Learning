// 131. 分割回文串
/**
 * @param {string} s
 * @return {string[][]}
 */
// 分割回文串函数
// 功能：将输入字符串分割成多个子串，使得每个子串都是回文串
// 参数：s - 输入字符串
// 返回：包含所有可能分割方案的二维数组
var partition = function(s) {
    // 存储所有符合条件的分割方案
    let res = []
    // 存储当前正在构建的分割方案
    let path = []
    
    // 回溯函数
    // 参数：startIndex - 当前开始分割的位置
    const backtracking = (startIndex) => {
        // 终止条件：当开始位置到达字符串末尾时，说明找到了一个完整的分割方案
        if (startIndex === s.length) {
            // 将当前分割方案添加到结果集中
            res.push([...path])
            return
        }
        
        // 遍历从startIndex开始的所有可能的分割点
        for (let i = startIndex; i < s.length; i++) {
            // 检查s[startIndex...i]是否为回文串
            if (!isPalindrome(s, startIndex, i)) continue
            
            // 如果是回文串，则将其添加到当前分割方案
            path.push(s.slice(startIndex, i + 1))
            
            // 递归处理剩余部分
            backtracking(i + 1)
            
            // 回溯：移除最后添加的子串
            path.pop()
        }
    }
    
    // 从字符串的开始位置开始回溯
    backtracking(0)
    
    // 返回所有分割方案
    return res
};

// 检查子串是否为回文串
// 参数：s - 原字符串, start - 子串的开始索引, end - 子串的结束索引
// 返回：如果是回文串则返回true，否则返回false
function isPalindrome(s, start, end) {
    // 双指针法检查回文串
    while (start < end) {
        // 如果首尾字符不相等，则不是回文串
        if (s[start] !== s[end]) return false
        // 移动指针
        start++
        end--
    }
    // 所有对应位置的字符都相等，是回文串
    return true
}