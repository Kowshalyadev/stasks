rows=+prompt("enter the rows:")
for(i=rows;i>=1;i--){
    res="",alpha=65,rev="",first=""
    for(j=i;j>=1;j--){
        res+=String.fromCharCode(alpha)
        rev=res
    for(k=1;k<=rows-i;k++){
        rev+=" "
    }
    if (i > 0) {
        rev += rev.split("").reverse().join("").slice(1);
    } else {
        rev += rev.split("").reverse().join("");
    }
        
        alpha++
    }
    console.log(rev)
}
// output
// enter the rows:7
// ABCDEFGFEDCBA
// ABCDEF FEDCBA
// ABCDE   EDCBA
// ABCD     DCBA
// ABC       CBA
// AB         BA
// A           A