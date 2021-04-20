// 遍历数组
// 相等返回目标，没有返回-1

Array.prototype.sequentialSearch = function(item){
    for(let i = 0; i < this.length; i += 1){
        if(this[i] === item){
            return i
        }
    }
    return -1
}

const res = [1, 2, 3, 4, 5].sequentialSearch(3)
console.log(res)

//时间复杂度: O(n)