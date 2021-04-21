// 二分搜索
var guessNumber = function(n) {
    let low = 1
    let high = n
    while(low < high){
        const mid = Math.floor((low + hign) / 2)
        const res = guess(mid)
        if(res === 0){
            return mid
        }else if(res === 1){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }

};

// 时间复杂度: O(logN)
// 空间复杂度: O(1)
// 无建立数组，矩阵，无线性增长