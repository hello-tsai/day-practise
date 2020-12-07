// 合并二维有序数组成一维有序数组，归并排序的思路
// [[1,2,3],[9,12,13],[4,8,10]]
// 归并排序：

// 简单方法
const newArr = flatten(arr)
function flatArrOne(arr) {
  return   newArr.sort((a, b) => a-b)
}
function flatten (arr) {
  return arr.flat(Infinity)
}
// 归并排序
function mergeSort(newArr){
  
}
const arr = [[1,2,3],[9,12,13],[4,8,10]]
console.log(mergeSort(arr));
