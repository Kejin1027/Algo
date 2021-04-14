// 用一快一慢指针遍历链表，如果指针能相逢，证明链表有环
// 遍历结束没相逢就false

var hasCycle = function(head){
    let p1 = head
    let p2 = head
    while(p1 && p2 && p2.next){
        p1 = p1.next 
        p2 = p2.next.next
        if(p1 === p2){
            return true
        }
    }
    return false
}

// 时间复杂度 O(n) while
// 空间复杂度 O(1) 无线性增长数据结构