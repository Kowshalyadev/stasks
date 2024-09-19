num="I am very happy today";
v="aeiouAEIOU",res=""
for(i of num){
   if(!(v.includes(i))){
       res=res+i
   }
    
}
console.log(res)
