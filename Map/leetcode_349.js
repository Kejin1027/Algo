// 用Map建立一个映射关系，记录nums1里有的值
// 遍历nums2, 找出nums1里也有的值

// 具体步骤
// 新建一个Map。 遍历nums1
// 遍历nums2,遇到字典里的值就选出，并从字典里删除

var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => {
        map.set(n,true);
    });

    const res = []
    nums2.forEach(n => {
        if(map.get(n)){
            res.push(n);
            map.delete(n);
        }
    })

    return res;
};

// 时间复杂度 O(m+n) for loop
// 空间复杂度 O(m)