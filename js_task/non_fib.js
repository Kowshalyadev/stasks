num=+prompt("Entera a Number:");
a=0;
b=1;
non_fib=0;
res=""
while(non_fib!=num){
    for(i=a+1;i<b;i++){
        res=res+i+" "
        non_fib++
        if(non_fib==num){
            break
        }
    }
     c=a+b
     a=b
     b=c
}
console.log(res)