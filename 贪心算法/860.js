// 860. 柠檬水找零
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            if (five) {
                five--
                ten++
            } else return false
        } else {
            if (ten && five) {
                ten--
                five--
            } else if (five >= 3) {
                five -= 3
            } else return false
        }
    }
    return true
};