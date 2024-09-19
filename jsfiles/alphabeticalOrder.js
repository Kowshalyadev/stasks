str=prompt("enter the str1: ").replaceAll(" ","");
strLower=str.toLowerCase()
emp=[]
for(i of strLower){
    for(j of i){
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
}
console.log(emp.sort())
for(k of emp){
    c=0
    for(i of strLower){
        for(j of i){
            if(k==j)
                c++
        }
    }
    if(str.includes(k)){
        console.log(`${k}->${c}`)
    }
    else{
        console.log(k.toUpperCase()+"->"+c)
    }
    
}

