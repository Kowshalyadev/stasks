str1=prompt("enter the str: ").split("")
emp=[],c0="",max=1
for(i of str1){
    if(!emp.includes(i)){
        emp+=i
    }
}
for(i of emp){
    c=0
    for(j of str1){
        if(i==j){
            // console.log(i,j)
            c++
        }
    }
    if(c>max)
    // max=c.length
    c0+=i
}
console.log(c0.charAt(0))
// output
// enter the str: apple
// p
// enter the str: takeuforward
// a