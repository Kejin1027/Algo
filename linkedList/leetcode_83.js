// 因为链表是有序的，所以重复元素一定相邻
// 遍历列表，如果发现当前元素和下一个元素相同，就删除下个元素值
var deleteDuplicates = function(head) {
    let p = head
    while(p && p.next){
        if(p.val === p.next.val){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head
};

// 时间复杂度 O(n) while
// 空间复杂度 O(1) 没有额外存储增长