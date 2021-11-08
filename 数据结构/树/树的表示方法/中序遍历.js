//中序遍历的递归实现
function InOrderTraversal(bTree) {
    if(bTree) {  
        InOrderTraversal(bTree.left);
        console.log(btree.value);
        InOrderTraversal(bTree.right);
    }
}

//中序遍历的非递归实现
//遇到一个非空结点就把它压入栈，并去遍历它的左子树；
//当左子树遍历结束后，从栈顶弹出这个结点并访问它
//然后按其右指针再去中序遍历该结点的右子树
function inOrderTraversal(bTree) {
    let T = bTree;
    let s = new Array();
    while (T || s.length !== 0) {
        while(T) {
            s.push(T); //一直向左并将沿途的结点压入堆栈
            T = T.left;
        }
        //当当前结点的左子树为空的时候，执行下面的操作
        if(s.length !== 0) {
            T = s.pop();  //弹出栈顶元素
            console.log(T.value + ' ');  //打印结点
            T = T.right;  //遍历右子树
        }
    }
}