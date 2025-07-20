// 139. 单词拆分
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/**
 * 判断字符串s是否可以被拆分成wordDict中的单词组合
 * @param {string} s - 要拆分的字符串
 * @param {string[]} wordDict - 单词字典
 * @return {boolean} - 字符串s是否可以被拆分成wordDict中的单词组合
 */
var wordBreak = function(s, wordDict) {
    // 获取字符串长度和单词字典长度
    const n = s.length;
    const m = wordDict.length;
    
    // dp[i] 表示s的前i个字符能否被wordDict中的单词组成
    let dp = new Array(n + 1).fill(false);

    // dp 数组初始化  空字符串可以被表示
    dp[0] = true;

    // 确定遍历顺序
    // i表示当前处理到字符串s的前i个字符
    for (let i = 1; i < n + 1; i++) {
        // j表示当前尝试使用的单词
        for (let j = 0; j < m; j++) {
            // 检查当前单词长度是否小于等于i
            // 检查从i-wordDict[j].length到i的子字符串是否等于当前单词
            // 检查s的前i-wordDict[j].length个字符是否可以被表示
            if (i >= wordDict[j].length && s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                // 如果满足条件，则s的前i个字符可以被表示
                dp[i] = true;
                // 一旦找到一个可以表示的方式，就可以跳出内层循环
                break;
            }
        }
    }
    // 返回s的前n个字符是否可以被表示，即整个字符串s是否可以被拆分成wordDict中的单词组合
    return dp[n];
};

s = "applepenapple"
wordDict = ["apple","pen"]
// 执行测试用例并输出结果
console.log(wordBreak(s, wordDict)); // 应输出 true
