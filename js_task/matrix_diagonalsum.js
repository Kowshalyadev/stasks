rows=+prompt("enetr a Number: ")
cols=+prompt("enter a Number: ")
matrix=[],sum=0
for(i=1;i<=rows;i++){
    x=[]
    for(j=1;j<=cols;j++){
        console.log("enter"+i+""+j+"elements")
        ele=+prompt()
        x.push(ele)
    }
    matrix.push(x)
}
console.log(matrix)
for(i of matrix){
    console.log(i.join(" "))
}
for(i=0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++){
        if(i==j||i+j==rows-1){
        sum+=matrix[i][j]  
        }
    }
    
}
console.log(sum)
// output
// enetr a Number: 3
// enter a Number: 3
// enter11elements
// 1
// enter12elements
// 2
// enter13elements
// 3
// enter21elements
// 4
// enter22elements
// 5
// enter23elements
// 6
// enter31elements
// 7
// enter32elements
// 8
// enter33elements
// 9
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// 1 2 3
// 4 5 6
// 7 8 9
// 25