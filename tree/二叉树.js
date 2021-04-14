// 树中每个节点最多只能是两个子节点
// 在JS中通常用Object来模拟二叉树

// 先序遍历算法口诀
// 访问根节点
// 对根节点的左子树进行先序遍历
// 对根节点的右子树进行先序遍历
const bt = {
    val: 1,
    left:{
        val: 2,
        left:{
            val: 4,
            left: null,

        },
        right:{
            val: 5,
            left: null,
            right: null,
        },

    },
    right:{
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};

// 前序遍历
// const preorder = (root) => {
//     if(!root) {return;}
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);

// }

const preorder = (root) => {
    if(!root) { return; }
    const stack = [root];
    while(stack.length){
        const n = stack.pop();
        console.log(n.val);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}





preorder(bt);


// 中序遍历
// const inorder = (root) => {
//     if(!root) {return;}
//     inorder(root.left);
//     console.log(root.val)
//     inorder(root.right)
// }

const inorder = (root) => {
    if(!root) {return;}
    const stack = [];
    let p = root;
    while(stack.length || p){
        while(p){
            stack.push(p);
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right;
    }
}

inorder(bt)

// 后序遍历

// const postorder = (root) => {
//     if(!root) {return;}
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);

// }

const postorder = (root) => {
    if(!root) { return; }
    const outputStack = [];
    const stack = [root];
    while(stack.length){
        const n = stack.pop();
        outputStack.push(n);
        if(n.left) stack.push(n.left);
        if(n.right) stack.push(n.right);
    }
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
}


postorder(bt)