num=[1,2,3]

emp=[],cout="",uni='',dup=""

for (i of num){ 
    // console.log(i)                      
    if(!emp.includes(i)){
        emp.push(i)
    }
}

// console.log(emp)
for(i of emp){
   c=0
   for(j of num){
    if(i==j){
        c++
    }
   }
   if(c==1){
    uni=uni+i+" "
   }
   else{
    dup+=i+" "
   }
}
console.log(uni)
// console.log(dup)
