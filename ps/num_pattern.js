rows=+prompt("enter the num: ")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=i;j++){
        if(j==1||i==j||i==rows)
        res+=j+" "
        else
        res+="  "
    }
    console.log(res)
}
// output
// enter the num: 5
// 1 
// 1 2 
// 1   3 
// 1     4 
// 1 2 3 4 5 