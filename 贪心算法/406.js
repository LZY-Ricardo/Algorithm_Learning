// 406. 根据身高重建队列
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // 先按身高降序排序，身高相同则按k值升序排序
    people.sort((a, b) => {
        if (b[0] !== a[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    });
    
    let res = [];
    for (let i = 0; i < people.length; i++) {
        res.splice(people[i][1], 0, people[i]);
    }
    return res;
};

people = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]];
console.log(reconstructQueue(people));
