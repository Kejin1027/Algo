// 先找出所有的不包含重复字符的字串
// 找出长度最大那个字串，返回长度

// 步骤
// 用双指针维护一个滑动窗口，用来剪切字串
// 不断移动右指针，遇到重复字符，就把左指针移动到重复字符下一位
// 过程中，记录所有窗口长度，并返回最大值
var lengthOfLongestSubstring = function(s) {
    let l = 0
    let res = 0
    const map = new Map()
    for(let r = 0; r < s.length; r++){
        if(map.has(s[r]) && map.get(s[r]) >= l){
            l = map.get(s[r]) + 1
        }
        res = Math.max(res,r - l + 1)
        map.set(s[r], r)
    }
    return res
};

// 时间复杂度 O(n) for循环
// 空间复杂度 O(m) 字符串中不重复字符的个数