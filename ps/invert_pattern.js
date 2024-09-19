rows=prompt("enter the num: ")
for(i=rows;i>=1;i--){
    res=""
    for(j=i;j>=1;j--){
        if(j==1||i==j||i==rows)
       res=res+(rows-j+1)+" "
      else
      res+="  "
    }
    console.log(res)
}
// output
// enter the num: 5
// 1 2 3 4 5 
// 2     5 
// 3   5 
// 4 5 
// 5 

