// 所有排列情况
// 没有重复元素

// 递归模拟所有情况
// 包含重复元素则回溯
// 收集所有到达重点的
var permute = function(nums) {
    const res = []
    const backtrack = (path) => {
        if(path.length === nums.length){
            res.push(path)
            return
        }
        nums.forEach(n => {
            if(path.includes(n)){
                return
            }
            backtrack(path.concat(n))
        })
    }
    backtrack([])
    return res
};

// 时间复杂度 O(n!) 阶乘
// 空间复杂度 O(n)