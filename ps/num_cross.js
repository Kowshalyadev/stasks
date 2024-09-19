row=+prompt("enter the name: ")
for(i=1;i<=row;i++){
    res=""
    for(j=1;j<=row;j++){
        if(j==i){
            res=res+i+" "
        }
        else if(i+j==row+1){
            res=res+(row-i+1)+" "
        }
        else{
            res=res+"  "
        }
    }  
    console.log(res)
}
// output
// enter the name: 5
// 1       5 
//   2   4   
//     3     
//   2   4   
// 1       5 
