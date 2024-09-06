str="kowwshii"
emp=[]
for(i of str){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    res=[],c=0
    for(j of str){
        if(i==j){
            res.push(i)
            c++
        }
    }
    if(c==1){
       console.log(typeof(res)) 
    }
}