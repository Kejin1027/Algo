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
        const n = stack.pop()
        console.log(n.val)
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
    }
    return res
}

preorder(bt);