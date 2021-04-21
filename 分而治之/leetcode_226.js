// 获取左右字数
// 递归的翻转左右子数
// 将翻转后的左右子树换个换个位置放在根节点上

var invertTree = function(root) {
    if(!root) {return null;}
    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left)
    }
};

// 时间复杂度: O(n)
// 空间复杂度: O(n)递归