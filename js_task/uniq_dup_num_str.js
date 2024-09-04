arr="4546"
arr=arr.split("").map(Number)
emp=[],unique="",duplicate=""
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
for(i of emp){
    c=0
    for(j of arr){
        if(i==j){
            c++
        }
    }
    if(c==1){
        unique+=i+" "
    }
    else{
        duplicate+=i+" "
    }
}
console.log("unique are : "+unique)
console.log("Duplicate is:"+duplicate)