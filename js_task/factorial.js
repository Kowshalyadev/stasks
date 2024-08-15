// num=2;
// sum=1;
// for (i=1;i<=num;i++){
//     sum=sum*i;
// }
// // console.log(num.split(" ").join("*")*" = " *sum);
// console.log(sum)
a=6;
factors=0
for (i=2;i<a;i++){
    if (a%i==0){
        factors=factors+1;
    }
}
if (factors==0){
    console.log("prime number")
}
else{
    console.log("Not a prime")
}


function factorial(n){
    return (n<2)?1:factorial(n-1)*n;
}
let n=5;
console.log(factorial(n));