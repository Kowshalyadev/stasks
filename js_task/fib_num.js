num=8;
a=0,b=1,i=1,res=" "
while(i<=num){
    res=res+a+" "
    c=a+b
    a=b
    b=c
    i++
}
console.log(res)