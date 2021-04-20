//
// 分区：从数组中任意选择一个“基准”,所有比基准小的元素放左边，比基准大的元素放在基准的后边

Array.prototype.quickSort = function(){
    const rec = (arr) => {
        if(arr.length === 1) {return arr;}
        const left = []
        const right = []
        const mid = arr[0]
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < mid){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return [...rec(left), mid, ...rec(right)]

    };
    const res = rec(this);
    res.forEach((n, i) => {this[i] = n});
}

const arr = [2, 4, 3, 5, 1]
arr.quickSort()
console.log(arr)

// 时间复杂度 
// 递归的时间复杂度O(logN)
// 分区：O(n)
// 整体 O(n * logN)