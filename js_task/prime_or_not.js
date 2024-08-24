num=(7);
if(num>1){
    count=0
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log('Not a prime number')
            count++
            break
        }
    }
    if(count==0){
        console.log("prime number")
    }
}
else{
    console.log("enter a valid number")
}