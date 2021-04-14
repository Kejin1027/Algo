// 在深度优先遍历的过程中，记录当前路径的节点值的和
// 在叶子节点处，判断当前路径的节点值的和是否等于目标值


var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    const dfs = (n, s) => {
        if(!n.left && !n.right && s === targetSum){
            return true
        }
        if(n.left) dfs(n.left, s+n.left.val)
        if(n.right) dfs(n.right, s+n.right.val)
    }
    dfs(root, root.val)
    return false
};

// 时间复杂度 O(n)
// 空间复杂度 O(n)