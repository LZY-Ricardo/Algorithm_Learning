// 797. 所有可能的路径
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // 存储所有从源节点到目标节点的路径
    let res = []
    // 当前遍历的路径
    let path = []
    // 将起始节点(0)加入路径
    path.push(0)
    
    /**
     * 深度优先搜索函数
     * @param {number[][]} graph - 图的邻接表表示
     * @param {number} cur - 当前访问的节点
     * @param {number} target - 目标节点
     */
    const dfs = (graph, cur, target) => {
        // 如果当前节点是目标节点，将当前路径添加到结果中
        if (cur === target) {
            // 使用展开运算符创建路径的副本，避免后续修改影响已保存的路径
            res.push([...path])
            return
        }
        
        // 遍历当前节点的所有邻接节点
        for (const item of graph[cur]) {
            // 将邻接节点加入当前路径
            path.push(item)
            // 递归访问邻接节点
            dfs(graph, item, target)
            // 回溯：从路径中移除最后一个节点，尝试其他路径
            path.pop()
        }
    }
    
    // 从节点0开始DFS，目标是最后一个节点(graph.length - 1)
    dfs(graph, 0, graph.length - 1)
    // 返回所有可能的路径
    return res
};