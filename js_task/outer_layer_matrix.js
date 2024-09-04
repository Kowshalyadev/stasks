rows=+prompt("enetr a Number: ")
cols=+prompt("enter a Number: ")
matrix=[],sum=0,outre_layer=[]
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
    res="",dia=" "
    for(j=0;j<matrix[i].length;j++){
        if(i==0||i==rows-1||j==0||j==cols-1){
            res+=matrix[i][j]+" " 
        }
       
    }
  all=all+res
}
console.log("Outer layer elements are: "+all)
// output:
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
// 3
// enter31elements
// 2
// enter32elements
// 5
// enter33elements
// 3
// [ [ 1, 2, 3 ], [ 4, 5, 3 ], [ 2, 5, 3 ] ]
// 1 2 3
// 4 5 3
// 2 5 3
// Outer layer elements are: 1 2 3 4 3 2 5 3 
