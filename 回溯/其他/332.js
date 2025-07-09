// 332. 重新安排行程
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const res = ['JFK'] // 初始放入起点 'JFK'
    const map = {} // 邻接表
    for (const ticket of tickets) { // 构建邻接表
        const [from, to] = ticket // 解构每一张机票, 读出起点和终点
        if (!map[from]) {
            map[from] = [] // 初始化
        }
        map[from].push(to) // 建立映射
    }

    for (const city in map) { // 按字母顺序 小的在前
        map[city].sort()
    }

    const dfs = (city, used) => { // city 是当前访问的城市 used 是已用掉的机票数
        if (used === tickets.length) {
            return true
        }
        const nextCities = map[city] // 获取下一站能去的城市 list
        // 当前城市没有记录在邻接表中（!nextCities为true）
        // 当前城市的目的地列表已空（nextCities.length === 0为true）
        if (!nextCities || nextCities.length === 0) { // 没有邻接城市了
            return false // 还没用光机票, 就没有下一站了, 返回false
        }
        for (let i = 0; i < nextCities.length; i++) {
            const next = nextCities[i] // 当前城市的下一站
            nextCities.splice(i,1) // 飞出地的 list 中删除这一站
            res.push(next) // 加入结果路径

            // 递归搜索
            if (dfs(next, used + 1)) { // 如果能找到解
                return true
            } else {
                // 回溯 撤销选择
                res.pop() // 从结果路径中移除
                nextCities.splice(i, 0, next) // 将城市重新加入列表
            }
        }
    }
    dfs('JFK', 0)
    return res
};


const findItinerary = (tickets) => {
  const res = [];
  const map = {};
  
  for (const ticket of tickets) { // 建表
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }

  const dfs = (node) => { // 当前城市
    const nextNodes = map[node]; // 当前城市的邻接城市
    while (nextNodes && nextNodes.length) { // 遍历，一次迭代设置一个递归分支
      const next = nextNodes.shift(); // 获取并移除第一项，字母小的城市
      dfs(next);                      // 向下递归
    }                 
    // 当前城市没有下一站，就把他加到res里，递归开始向上返回，选过的城市一个个推入res 
    res.unshift(node); 
  };

  dfs('JFK'); // 起点城市
  return res;
};

