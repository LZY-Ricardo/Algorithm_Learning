// 684. 冗余连接
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const init = () => {
        for (let i = 1; i <= edges.length; i++) {
            parent[i] = i
        }
    }
    const find = (x) => {
        if (parent[x] === x) return x
        return parent[x] = find(parent[x])
    }
    const join = (u, v) => {
        const rootU = find(u)
        const rootV = find(v)
        if (rootU === rootV) return false
        parent[rootU] = rootV
        return true
    }
    let parent = []
    init()
    for (const [u, v] of edges) {
        // 如果遍历的边的两个节点的根节点相同，说明这两个节点已经在同一个集合中，所以这一条边是冗余的
        if (!join(u, v)) {
            return [u, v]
        }
    }
    return []
};