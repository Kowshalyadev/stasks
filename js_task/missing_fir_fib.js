num=[10,1,0,5,7]
function firstFib(n1){
    a=0,b=1
    while(a<=n1){
       if(a==n1){
        return true
       }
       c=a+b
       a=b
       b=c
    }
    return false
}
a=0,b=1
while(true){
    if(firstFib(a)){
        if(!num.includes(a)){
            console.log(a)
            break
        }
        // break
    }
    a++
}
// num=[3,5,7,11,21]
// function primeCheck(n1){
//     if(n1>1){
//         for(i=2;i<n1;i++){
//             if(n1%i==0){
//                 return false
//             }
//         }
//         return true
//     }
//     return false
// }
// console.log(primeCheck(4))
// prime=2
// while(true){
//     if(primeCheck(prime)){
//         if(!num.includes(prime)){
//             console.log(prime)
//             break
//         }
//     }
//     prime++
// }


