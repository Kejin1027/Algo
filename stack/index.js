const stack = [];
stack.push(1);
stack.push(2);
const item1 = stack.pop();
const item2 = stack.pop();

// 前端与栈，JS中的函数调用堆栈
const fun1 = () => {
    fun2();
};
const fun2 = () => {
    fun3();
};
const fun3 = () => {};

fun1();