// 49. 字母异位词分组

// 计数
// 由于互为字母异位词的两个字符串包含的字母相同，
// 因此两个字符串中的相同字母出现的次数一定是相同的，
// 故可以将每个字母出现的次数使用字符串表示，作为哈希表的键。
// 由于字符串只包含小写字母，因此对于每个字符串，
// 可以使用长度为 26 的数组记录每个字母出现的次数。

var groupAnagrams = function(strs) {
    const map =new Object() // 创建一个哈希表 用于存储字母异位词分组
    for(let s of strs) { // 遍历数组
        const count = new Array(26).fill(0) 
        for (let c of s) { // 遍历字符串
            count[c.charCodeAt() - 'a'.charCodeAt()]++ // 统计字符串中每个字母出现的次数 并记录到哈希表中    
        }
        map[count] ? map[count].push(s) : map[count] = [s] // 如果哈希表中存在这个字母异位词 就将这个字符串加入到哈希表中 否则就创建一个新的数组 并将这个字符串加入到哈希表中
    }
    return Object.values(map) // 返回哈希表中的值 即字母异位词分组
};



// 排序
//由于互为字母异位词的两个字符串包含的字母相同，
// 因此对两个字符串分别进行排序之后得到的字符串一定是相同的，
// 故可以将排序之后的字符串作为哈希表的键。
var groupAnagrams = function(strs) {
    const map = new Object() // 创建一个哈希表 用于存储字母异位词分组
    for (let s of strs) { // 遍历数组
        let array = [...s] // 将字符串转化为数组 方便排序
        array.sort() // 对字符串进行排序 这样异位词就会变成相同的字符串 作为哈希表的键
        let key = array.toString() // 将数组转化为字符串 作为哈希表的键
        map[key] ? map[key].push(s) : map[key] = [s] // 如果哈希表中存在这个字母异位词 就将这个字符串加入到哈希表中 否则就创建一个新的数组 并将这个字符串加入到哈希表中
    }
    return Object.values(map) // 返回哈希表中的值 即字母异位词分组
};