num=123
res=0
while(num!=0){
    rem=num%10
    res=res*10+rem
    num=Math.floor(num/10)
}
console.log(res)