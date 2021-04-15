// 看到第K个最大元素，考虑选择使用最小堆
// 构建最小堆，依次把数组的值插入堆中
// 当堆得容量超过K，就删除堆顶
// 插入结束后，堆顶就是第K个最大元素
class MinHeap{
    constructor(){
        this.heap = []
    }
    swap(i1, i2){
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    getParentIndex(i){
        return (i - 1) >> 1
    }
    getLeftIndex(i){
        return i * 2 + 1
    }
    getRightIndex(i){
        return i * 2 + 2
    }
    shiftUp(index){
        if(index == 0) {return;}
        const parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    shiftDown(index){
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if(this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if(this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    pop(){
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    peek(){
        return this.heap[0]
    }
    size(){
        return this.heap.length
    }
}

var findKthLargest = function(nums, k) {
    const h = MinHeap()
    nums.forEach(n => {
        h.insert(n)
        if(h.size() > k){
            h.pop()
        }
    })
    return h.peek()
};

// 时间复杂度 O(n * logK)
// 空间复杂度 O(k)