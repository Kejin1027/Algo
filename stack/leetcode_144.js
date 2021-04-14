var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    if(root) stack.push(root);
    while(stack.length){
        const n = stack.pop()
        res.push(n.val)
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
    }
    return res;
};

// 时间复杂度 O(n)
// 空间复杂度 O(n)