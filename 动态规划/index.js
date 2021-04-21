// 讲一个问题分解为 相互重叠 的子问题,通过反复求解子问题，来解决原来的问题
var climbStairs = function(n) {
    if(n < 2) return 1;
    let dp0 = 1
    let dp1 = 1
    const dp = [1, 1];
    for(let i = 2; i <= n; i++){
        const temp = dp0
        dp0 = dp1
        dp1 = dp0 + temp
    }
    return dp1
};

// 时间复杂度 O(n)
// 空间复杂度 O(n)