// 150. 逆波兰表达式求值

var evalRPN = function(tokens) {
    let stack = []
    let res 
    for (let token of tokens) {
        if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
            console.log(token);
            stack.push(Number(token))
        } else if (stack.length >= 2){
            let n1 = stack.pop()
            let n2 = stack.pop()
            if (token === '+') {
                res = n1 + n2
                console.log(`${n1} ${token} ${n2} = ${res}`);
                stack.push(res)
            } else if (token === '-') {
                res = n2 - n1
                console.log(`${n1} ${token} ${n2} = ${res}`);
                stack.push(res)
            } else if (token === '*') {
                res = n1 * n2
                console.log(`${n1} ${token} ${n2} = ${res}`);
                stack.push(res)
            } else if (token === '/') {
                res = Math.trunc(n2 / n1)
                console.log(`${n1} ${token} ${n2} = ${res}`);
                stack.push(res)
            }
        }
        console.log('stack:',stack);
    }
    return stack[0]
};

var evalRPN = function(tokens) {
    let stack = []
    for (const token of tokens) {
        if (isNaN(Number(token))) { // 非数字
            let n1 = stack.pop()
            let n2 = stack.pop()
            switch(token) {
                case '+':
                    stack.push(n2 + n1)
                    break;
                case '-':
                    stack.push(n2 - n1)
                    break;
                case '*':
                    stack.push(n2 * n1)
                    break;
                case '/':
                    stack.push(Math.trunc(n2 / n1))
                    break;
            }
        } else { // 数字
            stack.push(Number(token))
        }
    }
    return stack.pop()
};

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens));
