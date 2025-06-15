var minWindow = function(s, t) {
    if (s.length < t.length) return ""
    let left = 0, right = 0
    let need = new Map()
    let window = new Map()
    let sub = 0
    for (let i = 0; i <t.length; i++) {
        need.set(t[i], need.get(t[i]) ? need.get(t[i]) + 1 : 1)
    }
    let start = 0,len = Infinity
    while (right < s.length) {
        let c = s[right]
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if(window.get(c) === need.get(c)) {
                sub++
            }
        }
        right++
        while (sub === need.size) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            let d = s[left]
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    sub--
                }
                window.set(d,window.get(d) - 1)
            }
        }
    }
    return len === Infinity ? "" : s.slice(start, start + len)
};
// s = "ADOBECODEBANC", t = "ABC"
s = "aa", t = "aa"
console.log(minWindow(s,t))
