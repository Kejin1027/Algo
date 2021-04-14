// 求最小深度，考虑使用广度优先遍历
// 在广度优先遍历中，遇到叶子节点，停止遍历，返回节点层级

var minDepth = function(root){
    if(!root) { return 0 }
    const q = [[root, 1]];
    while(q.length){
        const [n, l] = q.shift()
        if(!n.left && !n.right){
            return l
        }
        if(n.left) q.push([n.left, l + 1])
        if(n.right) q.push([n.right, l + 1])
    }
}

// 时间复杂度 O(n) 树节点数量
// 空间复杂度 O(n) 树节点数量