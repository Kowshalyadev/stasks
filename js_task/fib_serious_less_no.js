num=5
a=0,b=1,res=""
while(a<=num){
    res+=a+" "
    c=a+b
    a=b
    b=c
}
console.log(res)