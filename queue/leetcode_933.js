// 有新请求就入队，3000ms前发出的请求出队
// 队列的长度就是最近请求次数

var RecentCounter = function(){
    this.q = [];
}

RecentCounter.prototype.ping = function(t){
    this.q.push(t);
    while(this.q[0] < t - 3000){
        this.q.shift()
    }
    return this.q.length;
}

// 时间复杂度: O(n)
// 空间复杂度: O(n)