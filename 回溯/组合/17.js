// 17. 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    if (digits.length === 0) return []
    let res = []
    let path = []
    const backtracking = (index) => {
        len = digits.length
        if (index === len) {
            res.push(path.join(''))
            return
        }
        let str = map[digits[index]]
        for (let i = 0; i < str.length; i++) {
            path.push(str[i])
            backtracking(index + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};