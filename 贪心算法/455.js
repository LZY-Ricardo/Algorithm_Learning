// 455. 分发饼干
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) { // 纯暴力
    let res = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                res++
                s[j] = 0
                break
            }
        }
    }
    return res
};


var findContentChildren = function(g, s) {
    let res = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let j = 0
    for (let i = 0; i < g.length; i++) {
        while (j < s.length && s[j] < g[i]) {
            j++
        }
        if (j < s.length) {
            res++
            j++
        }
    }
    return res
};


var findContentChildren = function(g, s) { // 小饼干先喂饱小胃口
    let res = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let i = 0, j = 0
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            res++
            i++
            j++
        } else {
            j++
        }
    }
    return res
};

var findContentChildren = function(g, s) { // 大饼干先喂饱大胃口
    let res = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let i = g.length - 1, j = s.length - 1
    while (i >= 0 && j >= 0) {
        if (g[i] <= s[j]) {
            res++
            i--
            j--
        } else {
            i--
        }
    }
    return res
};