// 376. 摆动序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    // prediff: 前一个差值，初始为0
    // curdiff: 当前差值
    // res: 结果，初始为1（至少有一个元素）
    let prediff = 0
    let curdiff = 0
    let res = 1
    
    // 遍历数组，计算相邻元素的差值
    for (let i = 0; i < nums.length - 1; i++) {
        // 计算当前差值
        curdiff = nums[i + 1] - nums[i]
        
        // 判断是否形成摆动（前一个差值<=0且当前差值>0，或者前一个差值>=0且当前差值<0）
        if ((prediff <= 0 && curdiff > 0) || (prediff >= 0 && curdiff < 0)) {
            res++  // 摆动序列长度加1
            prediff = curdiff  // 更新前一个差值
        }
    }
    return res
};