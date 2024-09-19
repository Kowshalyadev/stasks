num=[10,1,0,5,7,2,3]
function firstFib(n1){
    a=0,b=1
    while(a<=n1){
       if(a==n1){
       return true
       }
       c=a+b
       a=b
       b=c
    }
    return false
}
fib=0
while(true){
    if(firstFib(fib)){
        if(!num.includes(fib)){
            console.log(fib)
            break
        }
        // break
    }
    fib++
}
