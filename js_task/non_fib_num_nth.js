num=+prompt("enter a number");
a=0,b=1,non_fib=0
while(non_fib!=num){
    for(i=a+1;i<b;i++){
        non_fib++
        if(non_fib==num){
            console.log(i)
            break
        }
    }
    c=a+b
    a=b
    b=c
}