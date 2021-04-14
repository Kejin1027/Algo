var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

// 时间复杂度 O(1) 无循环
// 空间复杂度 O(1) 无数组 矩阵