// 二分查找（Binary Search）
// 假设n个数据元素的关键字满足有序(从小到大或从大到小)
// 并且是连续存放（数组），那么可以进行二分查找。
//二分查找时间复杂度：T(N) = log2(N)
//二分查找判定树：
//1、判定树上每个结点需要查找次数刚好为该结点所在的层数
//2、查找成功时查找次数不会超过判定树的深度
//3、n个结点的判定树的深度为[log2n]+1(以2为底n的对数取整再加一)
//4、ASL（平均查找次数）

function binarySearch(array, target) {
    let left = 0;
    let right = array.length-1;
    let mid;
    let notFound = -1;
    while(left <= right) {
        mid = (left + right) / 2; //计算中间元素的下标
        if(target > mid) {
            left = mid + 1;    //调整计算左边界
        }else if(target < mid) {
            right = mid -1;    //调整右边界
        }
        else{
            return mid;
        }
    }
    return notFound;  //查找不成功，返回-1
}