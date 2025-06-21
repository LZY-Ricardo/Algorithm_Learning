// 202. 快乐数
var isHappy = function(n) {
    let set = new Set()
    let getSum = (n) => {
        let sum = 0
        while (n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }
    while (true) {
        res = getSum(n)
        if (res === 1) return true
        if (set.has(res)) return false
        set.add(res)
        n = res
    }
};
n = 19  
console.log(isHappy(n));
