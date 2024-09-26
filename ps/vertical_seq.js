num=4
for(i=1;i<=4;i++){
    res=""//i=3
    for(j=1;j<=i;j++){//j=1
        if(j==1){
            res+=i+" "
            nextNum=i-1
        }
        else{
            res+=nextNum+" "
            nextNum=nextNum-1
        }
    }
    console.log(res)
}
// output
// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 