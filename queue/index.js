const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift()
const item2 = queue.shift()

// 1.用 ES6 的 class，封装一个 Queue 类，包括 push、shift、peek 方法
class Queue{
    constructor(){
        this.queue = [];
    }
    push(q){
        this.queue = [...this.queue, q];
    }
    shift(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[0]
    }
}