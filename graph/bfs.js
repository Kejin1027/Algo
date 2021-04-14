// 广度优先遍历
const graph = require('./index.js')

const visited = new Set()
visited.add(2)
const q = [2]

while(q.length){
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c => {
        if(!visited.has(c)){
            q.push(c)
            visited.add(c)
        }
    })
}