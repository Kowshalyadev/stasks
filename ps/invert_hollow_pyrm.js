rows=prompt("enter the number : ")
for(i=rows;i>0;i--){
    // console.log(i)
    res=""
    for(k=1;k<=rows-i;k++){
        res=res+" "
    }
    for(j=i;j>0;j--){
        // console.log(j)
        if(j==i||i==rows||j==1)
        res+="* "
        else
        res=res+"  "
    }
    console.log(res)
}
// output:
// enter the number : 10
// * * * * * * * * * * 
//  *               * 
//   *             * 
//    *           * 
//     *         * 
//      *       * 
//       *     * 
//        *   * 
//         * * 
//          * 