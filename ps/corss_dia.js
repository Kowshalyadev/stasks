rows=+prompt("enter the rows : ")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(i==j)
        res+=i+" "
        else if(i+j==rows+1)
        res=res+(rows-i)+1+" "
        else
        res+="  "
    }
    console.log(res)
}
// output
// enter the rows : 5
// 1 
//   2 
//     3 
//   2   4 
// 1       5