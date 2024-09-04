arr=prompt().split("").map(Number)//"112"
emp=[],uni=" ",dup=" "
for(i of arr){
    c=0
    if(emp.indexOf(i) == -1 ){
        emp.push(i)
        c++
    }
}
// console.log(emp)
for (i of emp){
    c=0
    for(j of arr){
        if(i==j){
            c++
        }
    }
    if(c==1){
        uni+=i+" "
    }
    else{
        dup+=i+" "
    }
}
console.log("Uniques: "+uni)
console.log("duplicates: "+dup)