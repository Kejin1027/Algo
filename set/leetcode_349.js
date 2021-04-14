// 1.用集合对sums1去重
// 2.遍历nums1，筛选出nums2也包含的值

var intersection = function(nums1, nums2) {
    // return [...new Set(nums1)].filter(n => new Set(nums2).has(n));
    return [...new Set(nums1)].filter(n => nums2.includes(n));
};

// 时间复杂度 O(n2) / O(m * n)
// 空间复杂度 临时存储了数组 O(m)