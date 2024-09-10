num=8;
a=0,b=1,i=1,res=""
if(i<=num){
    res+=a+" "
    c=a+b
    a=b
    b=c
    i++
}
console.log(res)