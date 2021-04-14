// 使用Set对象 new add delete has size
// 迭代Set:多种迭代方法. Set与Array互转,求交集/差集

let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('text');
let o = { a: 1,b: 2};
mySet.add(o);
mySet.add({ a: 1,b: 2});

const has = mySet.has(1)

mySet.delete(5);

//-----------------------------------------------
// 迭代
for(let item of mySet){
    console.log(item);
}

for(let [key, value] of mySet.entries()){
    console.log(key,value)
}

// array / set 转换
const myArr = [...mySet];
const myArr = Array.from(mySet);

const mySet2 = new Set([1, 2, 3, 4]);

// 交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));

// 差集
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));

