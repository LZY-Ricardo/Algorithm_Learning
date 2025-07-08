// 93. 复原 IP 地址
/**
 * @param {string} s
 * @return {string[]}
 */
// 恢复IP地址的主函数
// 功能：将输入字符串分割成有效的IP地址格式
// 参数：s - 输入字符串
// 返回：包含所有可能有效IP地址的数组
var restoreIpAddresses = function(s) {
    // 存储所有有效的IP地址
    let res = []
    // 存储当前正在构建的IP地址部分
    let path = []
    // 字符串长度
    const len = s.length
    
    // 回溯函数
    // 参数：startIndex - 当前开始分割的位置
    const backtracking = (startIndex) => {
        // 终止条件：已经有4个部分且处理完整个字符串
        if (path.length === 4 && startIndex === len) {
            // 将当前有效的IP地址添加到结果中
            res.push(path.join('.'))
            return
        }
        
        // 遍历从startIndex开始的所有可能的分割点
        for (let i = startIndex; i < len; i++) {
            // 获取当前分割的部分
            let str = s.slice(startIndex, i + 1)
            // 检查当前部分是否有效
            if (!isValid(str)) continue
            
            // 将有效部分添加到当前路径
            path.push(str)
            
            // 递归处理剩余部分
            backtracking(i + 1)
            
            // 回溯：移除最后添加的部分
            path.pop()
        }
    }
    
    // 从字符串的开始位置开始回溯
    backtracking(0)
    
    // 返回所有有效的IP地址
    return res
};

// 检查IP地址部分是否有效
// 参数：str - 要检查的字符串
// 返回：如果有效则返回true，否则返回false
function isValid(str) {
    // 检查前导零：长度大于1且第一个字符是0则无效
    if (str.length > 1 && str[0] === '0') return false
    // 检查数字范围：必须在0-255之间
    if (+str > 255) return false
    return true
}