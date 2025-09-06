// 165. 比较版本号
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let len = Math.max(v1.length, v2.length)
    for (let i = 0; i < len; i++) {
        let temp1 = v1[i] ? Number(v1[i]) : 0 // 版本号可能有前导0，所以需要转换为数字 
        let temp2 = v2[i] ? Number(v2[i]) : 0 // 并且可能存在缺少修订号, 直接拿0填充
        if (temp1 > temp2) {
            return 1
        } else if (temp1 < temp2) {
            return -1
        }
    }
    return 0
};