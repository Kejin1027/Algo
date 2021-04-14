var isValid = function(s){
    if(s.length % 2 == 1) { return false}
    const stack = []
    const map = new Map()
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    for(let i = 0; i < s.length; i++){
        const l = s[i]
        if(map.has(l)){
            stack.push(l)
        }else{
            const r = stack[stack.length-1]
            if(map.get(r) === l){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length == 0
}

// 时间复杂度 O(n)
// 空间复杂度 O(n) map固定，不会增加