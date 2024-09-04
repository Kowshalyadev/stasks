rows=+prompt("enter a Number: ")
cols=+prompt("enter a Number: ")
matrixA=[]
for(i=1;i<=rows;i++){
    x=[]
    for(j=1;j<=cols;j++){
        console.log("enter"+i+""+j+"Number")
        ele=+prompt()
        x.push(ele)
    }
    console.log(x)
    matrixA.push(x)
}
console.log(matrixA)
for(i of matrixA){
    console.log(i.join(" "))
}
for(i=0;i<rows;i++){
    str=" "
    for(j=0;j<cols;j++){
        str+=matrixA[j][i]+" "
    }
    console.log(str)
    
}
//output
// enter a Number: 2
// enter a Number: 2
// enter11Number
// 1
// enter12Number
// 2
// [ 1, 2 ]
// enter21Number
// 2
// enter22Number
// 3
// [ 2, 3 ]
// [ [ 1, 2 ], [ 2, 3 ] ]
// 1 2
// 2 3
//  12
//  23
