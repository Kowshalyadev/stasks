str=prompt("enter the name:")
row=1,ind=0
while(str[ind]!=undefined){
    res=""
    for(i=1;i<=row;i++){
        if(str[ind]==undefined)
        res=res+"* "
        else
        res=res+str[ind]+" "
        ind++
    }
    console.log(res)
    row++
}
// output
// enter the name:kowshalya
// k 
// o w 
// s h a 
// l y a * 
