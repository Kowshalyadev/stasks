num=prompt("enter a number:").split("").map(Number)//"2788"
num=num.split("").map(Number)
emp=[],uniq="",dup=""
for(i of num){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
for(i of emp){
    c=0
    for(j of num){
        if(i==j){
            // console.log(i,j)
            c++

        }
    }
    if(c==1){
        console.log(`${i} -> ${c}`)
    }
    else{
        console.log(`${i} -> ${c}`)
    }
}
