arr=prompt().split(",").map(Number)//[538,111,200,652]
res=[]
for(i of arr){
    istr=String(i)
    c=0
    for(j=0;j<istr.length-1;j++){
        if(istr[j+1]<istr[j]){
            c++
        }
    }
    res.push((istr.length-1)==c)
}
console.log(res)