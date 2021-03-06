

var inorderTraversal = function(root) {
    const res =[];
    const rec = (n) =>{
        if(!n) return;
        rec(n.left);
        res.push(n.val)
        rec(n.right);
    }
    rec(root)
    return res
};

//迭代
var inorderTraversal = function(root) {
    const res =[];
    const stack = []
    let p = root
    while(stack.length || p){
        while(p){
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        res.push(n.val)
        p = n.right
    }
    return res
};

// 时间复杂度 O(n)
// 空间复杂度 O(n)