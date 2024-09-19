str1=prompt("enter").split(" ")
max=0,maxstr=""
for(i of str1){
    emp=""
    for(j of i){
        if(!emp.includes(j)){
            emp=emp+j
        }
    }
        if(i.length - emp.length > max){
            max=i.length - emp.length
            maxstr=i
        }
}
if(max==0){
    console.log(-1)
}
else{
    console.log(maxstr)
}
// output
// enter abcdfrljk google microsfot
// google