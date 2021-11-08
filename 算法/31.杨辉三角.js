/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [];
    for(let i=0;i<numRows;i++){
        let row = new Array(i+1).fill(1);
        for(let j=1;j<row.length-1;j++){
            row[j] = ans[i-1][j-1]+ans[i-1][j];
        }
        ans.push(row);
    }
    return ans;
};

// 打印杨辉三角
var generate1 = function(numRows) {
    let ans = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i+1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ans[i-1][j-1]+ans[i-1][j];
        }
        ans.push(row);
    }
    console.log(ans);
    for (let i = 0; i < numRows; i++) {
        let str = '';
        for (let j = 0; j < ans[i].length; j++) {
            str += ans[i][j];
        }
        for (let j = i+1; j < numRows ; j++) {
            str += ' ';
        }
        console.log(str);
    }
}

generate1(5);
