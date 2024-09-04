arr=prompt().split(",").map(Number)//[23,33,200,785]
res=[]
for(i of arr){
    istring=String(i)
    c=0
    for(j=0;j<istring.length;j++){
        if(istring[j+1]==istring[j]){
        if(!res.includes(istring[j])){
            res.push(Number(istring[j]))
            c++
        }
    }
}
}
console.log(res.join(""))
          