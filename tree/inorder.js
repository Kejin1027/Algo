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

// const inorder = (root) => {
//     if(!root) {return;}
//     inorder(root.left);
//     console.log(root.val)
//     inorder(root.right)
// }

const inorder = (root) => {
    if(!root) {return;}
    const stack = [];
    let q = root
    while(stack.length || q){
        while(q){
            stack.push(q)
            q = q.left
        }
        const n = stack.pop()
        console.log(n.val)
        q = n.right
    }
}

inorder(bt)