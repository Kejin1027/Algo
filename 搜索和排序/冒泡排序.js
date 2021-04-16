// bubble sort思路
// 比较所有相邻元素，如果第一个比第二个大，则交换他们
// Array.prototype.bubbleSort = function () {
//     for(let i = 0; i < this.length - 1; i++){
//         for(let j = 0; j < this.length - 1 - i; j++){
//             if(this[j] > this[j+1]){
//                 const temp = this[j];
//                 this[j] = this[j+1]
//                 this[j+1] = temp;
//             }
//         }
//     }
// }

const arr = [5, 4, 3, 2, 1]
arr.bubbleSort()
console.log(arr)

// 时间复杂度: O(n^2): 两个嵌套循环

