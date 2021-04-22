var subsets = function(nums) {
    let res = []
    const backtrack = (path, len, start) => {
        if(path.length === len){
            res.push(path)
            return
        }
        for(let i = start; i < nums.length; i++){
            backtrack(path.concat(nums[i]),len, i+1)
        }
    }
    for(let i = 0; i <= nums.length; i++){
        backtrack([], i, 0)
    }
    backtrack()
    return res
};