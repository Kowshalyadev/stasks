arr=prompt("enter a number:").split("").map(Number)
emp=[],uni=[],dup="",uniqe_nums=[],dup_nums=[]
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
for(i of emp){
    c=0
    for(j of arr){
        if(i==j)
        c++
    }
    if(c==1){
        uni+=i+" " 
    }
    else{
        dup+=i+" "
    }
}
if(uni.length==2){
    console.log("Unique is "+uni)
}
else{
    console.log("Uniques are "+uni)
}
if(dup.length==2){
    console.log("Duplicate is "+dup)
}
else{
    console.log("Duplicates are "+dup)
}