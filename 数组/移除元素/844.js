var backspaceCompare = function(s, t) {
    let res1 = []
    let res2 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '#') {
            res1.push(s[i])
        } else {
            res1.pop()
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] != '#') {
            res2.push(t[i])
        } else {
            res2.pop()
        }
    }
    return (res1.join('') === res2.join(''))
};

s = "ab#c", t = "ad#c"
// s = "ab##", t = "c#d#"
// s = "a##c", t = "#a#c"
// s = "ab##", t= "c#d#"
console.log(backspaceCompare(s,t))