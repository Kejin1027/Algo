// 求最大深度，考虑使用深度优先遍历
// 过程中，记录每个节点的层级，找出最大层级即可

// 解题步骤
// 新建一个变量，记录最大深度
// 深度优先遍历整棵树，并记录每个节点的层级，同时不断刷新最大深度这个变量
// 遍历结束返回最大深度这个变量
var maxDepth = function(root) {
    let res = 0;
    const dfs = (n, l) => {
        if(!n) { return; }
        if(!n.left && !n.right){
            res = Math.max(res, l);
        }
        dfs(n.left, l + 1);
        dfs(n.right, l + 1);
    };
    dfs(root, 1);
    return res;
};

// 时间复杂度 O(n)
// 空间复杂度 O(logN) / 最坏O(n)