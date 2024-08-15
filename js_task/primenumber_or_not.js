num=1
if (num>1){
    count=0;
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log("Not a Prime Number")
            count++
            break
        }
    }
    if(count==0){
        console.log("Pime number")
    }
}
else{
    console.log("Enter a Valid Number")
}