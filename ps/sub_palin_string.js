str1=prompt("enter");
maxplain="",maxlen=0
function palin(a){
    b=a.split("").reverse().join("")
    return a==b
}
for(i=0;i<str1.length-1;i++){
    temp=str1[i]
    for(j=i+1;j<str1.length;j++){
        temp=temp+str1[j]
        if(palin(temp)){
            if(temp.length>maxlen){
                maxlen=temp.length
                maxplain=temp
            }
        }
    }
}
console.log(maxplain)
// output
// enterabccbc
// bccb