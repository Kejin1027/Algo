// 在类里，声明一个数组，用来装元素
// 主要方法：插入，删除堆顶，获取堆顶，获取堆大小 
// 插入

// 删除堆顶
// 用数组尾部元素替换堆顶(直接删除会破坏堆解构)
// 然后下移，将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶
// 大小为k的复杂度位O（logk）

// 获取堆顶和堆得大小
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

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.pop()
