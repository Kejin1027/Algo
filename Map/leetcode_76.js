// 先找出所有的包含T的字串
// 找出长度最小的子串，返回

// 步骤
// 用双指针维护一个滑动窗口
// 移动右指针，找到包含T的子串，移动左指针，尽量减少包含T的字串的长度
var minWindow = function(s, t) {
    let l = 0;
    let r = 0;
    const need = new Map()
    let res = '';
    for(let c of t){
        need.set(c, need.has(c) ? need.get(c)+1 : 1)
    }
    let needType = need.size;
    while(r < s.length){
        const c = s[r];
        if(need.has(c)){
            need.set(c, need.get(c) - 1)
            if(need.get(c) === 0) needType -= 1;
        }

        while(needType === 0){
            const newRes = s.substring(l, r+1);
            if(!res || newRes.length < res.length) res = newRes;
            const c2 = s[l];
            if(need.has(c2)){
                need.set(c2, need.get(c2) + 1)
                if(need.get(c2) === 1) needType += 1
            }
            l += 1;
        }

        r += 1
    }
    return res
};

// 时间复杂度 O(m + n) m-t长度 n-s长度
// 空间复杂度 O(m)