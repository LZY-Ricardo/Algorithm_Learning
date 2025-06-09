var mySqrt = function(x) {
    let left = 0
    let right = x
    let ans = 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid <= x) {
            ans = mid 
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return ans
};
console.log(mySqrt(4));
