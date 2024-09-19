rows=prompt("enter the rows")
for(i=1;i<=rows;i++){
    res=""
    for(k=1;k<=i;k++){
        res+=" "
    }
    for(j=1;j<=rows-i;j++){
        res+="* "
    }
    console.log(res)
}
// enter the rows5
//  * * * * 
//   * * * 
//    * * 
//     * 
     