// 把矩阵想象成图
// 从海岸线逆流而上遍历图，所到之处就是可以流到某个大洋的坐标

// 新建两个矩阵
// 分别记录能留到两个大洋的坐标
// 深度优先遍历，过程中填充上述矩阵
// 遍历矩阵，找到能留到两个打野坐标
var pacificAtlantic = function(heights) {
    if(!heights || !heights[0]) { return [];}
    const m = heights.length
    const n = heights[0].length
    const flow1 = Array.from({length:m}, () => new Array(n).fill(false))
    const flow2 = Array.from({length:m}, () => new Array(n).fill(false))

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r-1, c], [r+1, c],[r, c-1],[r, c+1]].forEach(([nr, nc]) => {
            if(
                nr >= 0 && nr < m && nc >= 0 && nc < n &&
                !flow[nr][nc] && heights[nr][nc] >= heights[r][c]
            ){
                dfs(nr, nr, flow)
            }
        })
    }

    for(let r = 0; r < m; r++){
        dfs(r, 0, flow1)
        dfs(r, n-1, flow2)
    }

    for(let c = 0; c < n; c++){
        dfs(0, c, flow1)
        dfs(m-1, c, flow2)
    }

    const res = []
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(flow1[r][c] && flow2[r][c]){
                res.push([r, c]);
            }
        }
    }
    return res

};