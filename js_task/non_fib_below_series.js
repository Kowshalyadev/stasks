num=13;
a=0,b=1,value=true,res=''
while(value){
    for(i=a+1;i<b;i++){
        if(i>num){
            value=false
            break
        }
        res+=i+" "
        // console.log(res)
    }
    c=a+b
    a=b
    b=c
}
console.log(res)