rows=prompt("enter the rows")
c=1
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=i;j++){
            res+=(c)+" "
            c++
            
    }
    console.log(res)
}
// output:
// enter the rows3
// 1 
// 2 3 
// 4 5 6 