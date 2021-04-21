
var guessNumber = function(n) {
    const rec = (low, high) => {
        if(low > high) {return;}
        const mid = Math.floor((low + high) / 2)
        const res = guess(mid)
        if(res === 0){
            return mid
        }else if(res === 1){
            return rec(mid + 1, high)
        }else{
            return rec(1, mid - 1)
        }
    }
    return rec(1, n)
    
};

//时间复杂度 O(logN)
//空间复杂度 O(logN) 递归调用堆栈,线性增长