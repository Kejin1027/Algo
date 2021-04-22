// 局部最优，见好就收，见差就不动
// 新建一个变量，统计总利润
// 遍历价格数组，如果比昨天高，就昨天买，今天卖
var maxProfit = function(prices) {
    let total = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            total += prices[i] - prices[i-1]
        }
    }
    return total
};

// 时间复杂度 O(n)
// 空间复杂度 O(1)