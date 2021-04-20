// 归并排序相似
// 新建一个链表，作为返回结果
// 用指针遍历两个有序链表，并比较两个链表的当前节点，较小者接入新链表，指针后移
var mergeTwoLists = function(l1, l2) {
    const res = new ListNode(0)
    let p = res
    let p1 = l1
    let p2 = l2
    while(p1 && p2){
        if(p1.val < p2.val){
            p.next = p1
            p1 = p1.next
        } else{
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }
    if(p1){
        p.next = p1
    }
    if(p2){
        p.next = p2
    }
    return p
};

// 时间复杂度 O(n)
// 空间复杂度 O(1) 常量级别的指针变量