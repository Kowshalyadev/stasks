num="527343"
sum=0
function fib(n){
    a=0,b=1
    while(a<=n){
        if(a==n){
           return true
        }
        c=a+b
        a=b
        b=c
    }
    return false
}
for(i of num){
    if(fib(n)){
        sum+=Number(i)
    }
}
console.log(sum)