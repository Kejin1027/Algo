var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while (curr) {
        let tmp = curr.next;    // 1. 临时存储当前指针后续内容
        curr.next = prev;       // 2. 反转链表
        prev = curr;            // 3. 接收反转结果
        curr = tmp;             // 4. 接回临时存储的后续内容
    }
    return prev;
};

// 时间复杂度 O(n) while
// 空间复杂度 O(1) 无数组 矩阵