rows=prompt("enter the name:");
lengthRow=rows.length
for(i=0;i<lengthRow;i++){
    res=""
    for(j=0;j<lengthRow;j++){
        if(i==j){
            res=res+rows[i]+" "
        }
        else if(i+j==lengthRow-1){
            res=res+rows[lengthRow-i-1]+" "
        }
        else{
            res+="  "
        }
    }
    console.log(res)
}
// output
// enter the name:kowshalya
// k               a 
//   o           y   
//     w       l     
//       s   a       
//         h         
//       s   a       
//     w       l     
//   o           y   
// k               a 