// MergeSort
// 分：把数组分成两半，再递归的对子数组进行分操作，直到分成单个树
// 合：把两个数合并为有序数组，在对有序数组进行合并,直到全部子数组并为完整数组

// 新建空数组res,用于存放最终排序后数组
// 比较两个有序数组的头部，较小者出队并推入res
// 如果两个数组还有值，就重复第二步

Array.prototype.MergeSort = function(){
    const rec = (arr) => {
        if(arr.length === 1) {return arr}
        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid, arr.length)
        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length && orderRight.length){
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            }else if(orderLeft.length){
                res.push(orderLeft.shift())
            }else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res
    }
    const res = rec(this)
    res.forEach((n, i) => { this[i] = n})

}

const arr = [5, 4, 3, 2, 1]
arr.MergeSort()
console.log(arr)

// 时间复杂度 O(logN)