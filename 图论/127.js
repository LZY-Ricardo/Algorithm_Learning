// 127. 单词接龙
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/**
 * 字符串接龙算法 - 使用BFS求最短路径
 * @param {string} beginWord - 起始字符串
 * @param {string} endWord - 目标字符串
 * @param {string[]} wordList - 字典中的字符串列表
 * @return {number} - 最短转换序列的长度，无法转换则返回0
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // 边界条件：如果起始字符串和目标字符串相同，直接返回1
    if (beginWord === endWord) return 1
    
    // 将字典转换为Set，提高查找效率
    let set = new Set(wordList)
    
    // 如果目标字符串不在字典中，无法完成转换
    if (!set.has(endWord)) return 0
    
    // visitedMap记录每个字符串的访问状态和到达该字符串的步数
    let visitedMap = new Map()
    
    // BFS队列，存储待处理的字符串
    let queue = []
    queue.push(beginWord)
    visitedMap.set(beginWord, 1) // 起始字符串的步数为1
    
    // BFS主循环
    while (queue.length) {
        let curStr = queue.shift() // 取出队列头部的字符串
        
        // 遍历当前字符串的每个位置
        for (let i = 0; i < beginWord.length; i++) {
            let curArr = curStr.split('') // 将字符串转换为字符数组便于修改
            
            // 尝试将当前位置替换为a-z的每个字母
            for (let j = 0; j < 26; j++) {
                curArr[i] = String.fromCharCode('a'.charCodeAt(0) + j)
                let newStr = curArr.join('') // 生成新的字符串
                
                // 跳过与当前字符串相同的情况（优化）
                if (newStr === curStr) continue;
                
                // 如果生成的字符串就是目标字符串，返回步数+1
                if (newStr === endWord) {
                    return visitedMap.get(curStr) + 1
                }
                
                // 如果新字符串在字典中且未被访问过，加入队列
                if (set.has(newStr) && !visitedMap.has(newStr)) {
                    queue.push(newStr)
                    visitedMap.set(newStr, visitedMap.get(curStr) + 1)
                }
            }
        }
    }
    
    // 无法找到转换路径，返回0
    return 0
};



var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0

    const queue = [[beginWord, 1]]
    const visited = new Set()

    function replaceWord(word, i, char) {
        return word.slice(0, i) + char + word.slice(i + 1)
    }

    while(queue.length) {
        const [word, depth] = queue.shift()
        if(word === endWord) return depth


        for(let i = 0; i < word.length; i++) {
            for(let j = 0; j < 26; j++) {
                const c = String.fromCharCode(97 + j)
                const newWord = replaceWord(word, i, c)
                if(wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord)
                    queue.push([newWord, depth+1])
                }
            }
        }
    }

    return 0
};
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
console.log(ladderLength(beginWord, endWord, wordList));

