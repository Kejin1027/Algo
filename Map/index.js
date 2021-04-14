const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');
m.set('c', 2);

// 查
console.log(m.has('a'));
console.log(m.has('aa'));
m.get('a');

// 删
// m.delete('b');
// m.clear();

// 改
m.set('a', 'aaa');