// 从数组中间元素开始，如果小于择搜索小于的那部分，如果大于泽搜索大于的那部分

Array.prototype.binarySearch = function(item){
    this.sort();
    let low = 0
    let high = this.length-1
    while(low <= high){
        const mid = Math.floor((low + high) / 2)
        const element = this[mid]
        if(element < item){
            low = mid + 1
        } else if(element > item){
            high = mid - 1
        } else{
            return mid
        }
    }
    return - 1
}

const res = [1, 2, 3, 4, 5].binarySearch(3)
console.log(res)

// 时间复杂度 O(logN)