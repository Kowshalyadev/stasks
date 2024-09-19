rows=prompt("enter the str")
for(i=1;i<=rows;i++){
    first_pyramid=""
    first_pyramid+=(" ".repeat(rows-i)+"* ".repeat(i))
    console.log(first_pyramid)
}
 for(j=1;j<=rows;j++){
        second_pyramid=""
        second_pyramid+=(" ".repeat(j)+"* ".repeat(rows-j))
        console.log(second_pyramid)
    }
// output
// enter the str3
//   * 
//  * * 
// * * * 
//  * * 
//   * 
   