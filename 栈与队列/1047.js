// 1047. 删除字符串中的所有相邻重复项

var removeDuplicates = function(s) {
        let comp = 1
        while (comp < s.length) {
            if (comp > 0 && s[comp - 1] === s[comp]) {
                s = s.slice(0, comp - 1) + s.slice(comp + 1)
                comp--
            } else {
                comp++
            }
        }
    return s
};

var removeDuplicates = function(s) {
    let res = [] // 栈
    for (let c of s) { // 遍历字符串
        if (res.length === 0 || res[res.length - 1] !== c) { // 如果栈为空 或者 栈顶元素 不等于 现在遍历到的元素 
            res.push(c) // 将现在遍历到的元素压入栈顶
        } else {
            res.pop() // 否则 栈顶元素等于现在遍历到的元素 说明两个元素抵消了 此时需要将栈顶元素出栈
        }
    }
    return res.join('') // 最后将栈中元素转化为字符串
};

s = "bbabbaca"
console.log(removeDuplicates(s));
