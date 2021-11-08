function bigRootHeap(arr, start, end){
    //建立父节点和子节点指针
    let dad = start, son = dad * 2 + 1;
    //当子节点未越界时才进行比较
    while (son <= end) {
        if (son + 1 <= end && arr[son] < arr[son + 1]) {
            son++;  //若右孩子的值大于左孩子的值，则将指针挪到右孩子
        }
        if (arr[dad] > arr[son]) { //如果父节点大于子节点代表调整完毕，跳出函数
            return;
        }else { //否则交换父子元素，再继续将子节点与孙节点进行比较
            let temp = arr[dad];
            arr[dad] = arr[son];
            arr[son] = temp;
            dad = son;
            son = dad * 2 + 1;
        }
    }
}

function heapSort(arr) {
    //从最后一个非叶子结点开始开始调整
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
        bigRootHeap(arr, i, arr.length - 1);
    }
    //将堆顶元素与末尾元素进行交换，重新调整堆结构
    for (let i = arr.length - 1; i > 0; i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        bigRootHeap(arr, 0, i - 1);
    }
}

let arr = [4,5,1,6,2,7,3,8];
heapSort(arr);