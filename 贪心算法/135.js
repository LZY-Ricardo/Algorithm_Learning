// 135. 分发糖果
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // 从左到右遍历，确保右边评分高的孩子比左边孩子多1个糖果
    let left = new Array(ratings.length).fill(1)
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1
        }
    }
    
    // 从右到左遍历，确保左边评分高的孩子比右边孩子多1个糖果
    let right = new Array(ratings.length).fill(1)
    for (let i = ratings.length - 2; i >=0; i--) {  // 修正：从倒数第二个开始
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1
        }
    }    
    
    // 合并两个方向的分配结果，取最大值确保满足两个方向的规则
    let res = 0
    for (let i = 0; i < ratings.length; i++) {
        res += Math.max(left[i], right[i])
    }
    return res
};


var candy = function(ratings) { // 优化
    let left = new Array(ratings.length).fill(1)
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1
        }
    }
    let right = 0, res = 0
    for (let i = ratings.length - 1; i >=0; i--) {
        if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]){
            right++
        } else {
            right = 1
        }
        res += Math.max(left[i], right)
    }    
    return res
};