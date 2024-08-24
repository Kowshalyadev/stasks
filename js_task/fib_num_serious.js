input="76598";
a=0,b=1,res=" ",c=[,];
max=input[0]
for(i=1;i<input.length;i++){
    if(input[i]>max){
        max=input[i]

    }
   }
for(i of input){
    while(max<=i){
        res=res+max+" "
        c=a+b
        a=b
        b=c
        i++
    }
}
console.log(res)
