rows=5
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?rows-i+1:i-rows+1
    space=(i<=rows)?i-1:2*rows-i-1
    res=""
    for(k=1;k<=space;k++){
        res=res+" "
    }
    for(j=1;j<=cols;j++){
        res=res+"* "
    }
    console.log(res)
}
// output
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
