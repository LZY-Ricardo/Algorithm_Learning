// 118. 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [] // 结果数组
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1) // 初始化当前行
        for (let j = 1; j < row.length - 1; j++) { // 从第二个元素开始，到倒数第二个元素结束
            row[j] = res[i - 1][j - 1] + res[i - 1][j] // 计算当前行的每个元素
        }
        res.push(row)
    }
    return res
};