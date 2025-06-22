// 383. 赎金信

var canConstruct = function(ransomNote, magazine) { // 暴力解法
    let res = 0
    let magArr = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        let item = ransomNote[i]
        for (let j = 0; j < magArr.length; j++) {
            if (item === magArr[j]) {
                magArr.splice(j , 1)
                res++
                break
            }
        }
    }    
    if (res === ransomNote.length) {
        return true
    }
    return false
};

var canConstruct = function(ransomNote, magazine) { // 改进后的暴力解法
    // 将 magazine 字符串转换为数组
    let magArr = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
        // 在marArr中查找匹配字符
        const index = magArr.indexOf(char)
        if (index === -1) {
            return false // 没找到直接返回false
        }
        // 找到后删除该字符 (模拟使用掉该字符)
        magArr.splice(index , 1)
    }
    return true
};

var canConstruct = function(ransomNote, magazine) { // 哈希解法 用 map 做哈希表
    let map = new Map()
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i]
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
        if (map.has(char)) {
            let count = map.get(char)
            if (count > 0) {
                map.set(char, --count)
            }else return false
        } else return false
    }
    return true
};

var canConstruct = function(ransomNote, magazine) { // 哈希解法 用 数组 做哈希表 相比较于 map 更省时间空间
    let arr = new Array(26).fill(0)
    let base = 'a'.charCodeAt()
    for (let i = 0; i < magazine.length; i++) {
        arr[magazine[i].charCodeAt() - base]++
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let index = ransomNote[i].charCodeAt() - base
        if (arr[index] > 0) {
            arr[index]--
        } else {
            return false
        }
    }
    return true
};
