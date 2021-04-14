// 如果A沿着原型链找到B。prototype，那么A instanceof B 为true 
// obj instanceof Object = true
// func instanceof Object = true
// arr instanceof Object = true

// func instanceof Function = true
// arr instanceof Array = true

// 如果在A对象上没有找到X属性，那么会沿着原型链找X属性

Object.prototype.x = 'x';
const func = () =>{};
Function.prototype.x = 'y';
console.log(func.x)

// 手写instanceof原理

const instanceOf = (A, B) => {
    let p = A
    while(p){
        if(p === B.prototype){
            return true
        }
        p = p.__proto__;
    }
    return false
}
console.log(instanceOf(1, Number))

