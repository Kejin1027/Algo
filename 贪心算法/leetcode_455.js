// 局部最优:既能满足孩子，还消耗最少
// 先将"较小的饼干"分给胃口最小的孩子

// 对饼干数组和胃口数组升序排序
// 遍历饼干数组，找到能满足第一个孩子的饼干
// 继续遍历, 找到满足二 三...
var findContentChildren = function(g, s) {
    const sortFunc = function(a, b){
        return (a - b);
    }
    g.sort(sortFunc)
    s.sort(sortFunc)
    let i = 0
    s.forEach((n) => {
        if(n >= g[i]){
            i += 1
        }
    })
    return i
};

// 时间复杂度 O(nlogn)
// 空间复杂度 O(1)