// 20. 有效的括号

var isValid = function(s) {
    // 定义括号映射关系：左括号对应右括号
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    // 使用栈结构来跟踪未匹配的括号
    let stack = []
    
    // 遍历输入字符串中的每个字符
    for (let i = 0; i < s.length; i++) {
        // 如果是左括号，将对应的右括号压入栈
        if (map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            // 如果是右括号，检查是否与栈顶元素匹配
            if (stack.length && stack.pop() === s[i]) {
                continue  // 匹配成功，继续检查下一个字符
            } else {
                return false  // 不匹配，直接返回false
            }
        }
    }
    
    // 最后检查栈是否为空，空栈表示所有括号都正确匹配
    return stack.length === 0
}